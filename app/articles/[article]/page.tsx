import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

import Article from '@/Components/Article';
import authOptions from '@/Lib/authOptions';

type ArticleProps = {
  params: {
    article: string;
  };
};

const ArticlePage = async ({ params: { article: slug } }: ArticleProps) => {
  const session = await getServerSession(authOptions);

  if (!session) redirect('/');

  return <Article slug={slug} />;
};

export default ArticlePage;
