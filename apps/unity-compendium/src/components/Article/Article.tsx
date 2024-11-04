'use client';

import clsx from 'clsx';
import { useSession } from 'next-auth/react';
import { notFound } from 'next/navigation';
import { Fragment, useEffect, useRef } from 'react';
import withAuth from 'src/hoc/withAuth';

import { Markdown } from '@unity/components';

import Header from '@/Components/Header';
import Infobox from '@/Components/Infobox';
import addActivitiesAnalytics from '@/Fetchers/activitiesAnalytics/addActivitiesAnalytics';
import useGetBySlug from '@/Hooks/useGetBySlug';

type ArticleProps = {
  slug: string;
};

const Article = ({ slug }: ArticleProps) => {
  const lastVisitedUrlRef = useRef<string | null>();
  const { data: session } = useSession();

  const { data: article, isLoading: isArticleLoading } = useGetBySlug(slug);

  useEffect(() => {
    if (!article && !isArticleLoading) notFound();
  }, [article, isArticleLoading]);

  useEffect(() => {
    lastVisitedUrlRef.current = sessionStorage.getItem('lastVisitedUrl');
  }, [slug]);

  useEffect(() => {
    const run = async () => {
      if (isArticleLoading || !article || !session) return;

      if (typeof lastVisitedUrlRef.current === 'undefined' || lastVisitedUrlRef.current === article.fields.slug) return;

      lastVisitedUrlRef.current = article.fields.slug;
      sessionStorage.setItem('lastVisitedUrl', article.fields.slug);

      addActivitiesAnalytics({
        userId: session?.user?.id,
        slug: article.fields.slug,
      });
    };

    run();
  }, [article, session, isArticleLoading]);

  return (
    <>
      <Header />
      <main
        className={clsx(
          'mx-auto min-h-screen max-w-4xl bg-white bg-opacity-90 px-8 pb-20 pt-32 shadow-article transition-opacity',
          'sm:mt-16 sm:px-16 sm:py-20',
          article ? 'opacity-100' : 'opacity-0'
        )}
        data-component="cArticle"
      >
        {article && (
          <>
            <h1 className="mb-8 text-4xl md:text-5xl lg:text-6xl">{article.fields.title}</h1>
            <div>
              {article.fields.infobox && <Infobox infobox={article.fields.infobox} />}
              <div>
                {article.fields.content.map((section, i) => {
                  if (!section?.fields) return <Fragment key={`Article-${i}`} />;

                  return (
                    <div key={`Article-${i}`} className="mb-16">
                      {section?.fields.title && (
                        <h2
                          className={clsx(
                            'relative mb-4 text-3xl lg:text-4xl',
                            'before:content[""] before:absolute before:left-0 before:top-full before:h-px before:w-full before:bg-black'
                          )}
                        >
                          {section?.fields.title}
                        </h2>
                      )}
                      <Markdown content={section?.fields.content} />
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default withAuth(Article);
