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
    <div className="cArticle">
      <h1>{title}</h1>
      {content.map((section, i) => (
        <div key={`Article-${i}`}>
          <Markdown content={section?.fields.content} />
        </div>
      ))}
    </div>
  );
};

export default Article;
