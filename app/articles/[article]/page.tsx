import clsx from 'clsx';
import { getServerSession } from 'next-auth';
import { notFound, redirect } from 'next/navigation';

import getByContentModel from '@/Fetchers/contentful/getByContentModel';
import getBySlug from '@/Fetchers/contentful/getBySlug';
import authOptions from '@/Lib/authOptions';
import Markdown from '@/Lib/markdown';
import { ArticleType } from '@/Types/contentful-codegen/SimplerContentfulTypes';

export async function generateStaticParams() {
  const entries = (await getByContentModel('article')) as ArticleType[];

  return entries.map((entry) => ({
    slug: entry.fields.slug,
  }));
}

type ArticleProps = {
  params: {
    article: string;
  };
};

const Article = async ({ params: { article: slug } }: ArticleProps) => {
  const session = await getServerSession(authOptions);

  if (!session) redirect('/');

  const entry = await getBySlug(slug);

  if (!entry) notFound();

  const { title, content } = entry.fields;

  return (
    <div
      className="mx-auto mt-16 min-h-screen max-w-4xl bg-article-background px-16 py-20 shadow-article"
      data-component="cArticle"
    >
      <h1 className="mb-4 text-6xl">{title}</h1>
      {content.map((section, i) => (
        <div key={`Article-${i}`} className="mb-16">
          {section?.fields.title && (
            <h2
              className={clsx(
                'relative mb-4 text-4xl',
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
  );
};

export default Article;
