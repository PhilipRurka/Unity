import getByContentModel from '@/Fetchers/contentful/getByContentModel';
import getBySlug from '@/Fetchers/contentful/getBySlug';
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

  return <pre>{JSON.stringify(entry, null, 2)}</pre>;
};

export default Article;
