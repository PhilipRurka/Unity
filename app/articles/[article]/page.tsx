import Article from '@/Components/Article';

type ArticleProps = {
  params: {
    article: string;
  };
};

const ArticlePage = async ({ params: { article: slug } }: ArticleProps) => <Article slug={slug} />;

export default ArticlePage;
