import getByContentModel from '@/Fetchers/contentful/getByContentModel';
import getBySlug from '@/Fetchers/contentful/getBySlug';
import { TypeArticleWithoutUnresolvableLinksResponse } from '@/Types/contentful-codegen/TypeArticle';

export async function generateStaticParams() {
  const entries = (await getByContentModel('article')) as TypeArticleWithoutUnresolvableLinksResponse[];

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
