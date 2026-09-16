import Article from '@/Components/Article';

type ArticleProps = {
  params: Promise<{
    article: string;
  }>;
};

const ArticlePage = async ({ params }: ArticleProps) => {
  const { article: slug } = await params;

  return <Article slug={slug} />;
}

export default ArticlePage;
