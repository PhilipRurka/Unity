'use client';

import clsx from 'clsx';
import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';

import Infobox from '@/Components/Infobox';
import getBySlug from '@/Fetchers/contentful/getBySlug';
import Markdown from '@/Lib/markdown';
import { ArticleType } from '@/Types/contentful-codegen/SimplerContentfulTypes';

type ArticleProps = {
  slug: string;
};

const Article = ({ slug }: ArticleProps) => {
  const [article, setArticle] = useState<ArticleType>();

  useEffect(() => {
    const getArticle = async () => {
      const entry = await getBySlug(slug);
      if (!entry) notFound();

      setArticle(entry);
    };

    getArticle();
  }, [slug]);

  return (
    <div
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
              {article.fields.content.map((section, i) => (
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
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Article;
