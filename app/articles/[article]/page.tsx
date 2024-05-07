import { notFound } from 'next/navigation';

import getByContentModel from '@/Fetchers/contentful/getByContentModel';
import getBySlug from '@/Fetchers/contentful/getBySlug';
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
        <Markdown key={`Article-${i}`} content={section?.fields.content} />
      ))}
    </div>
  );
};

export default Article;
