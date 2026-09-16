import { HomepageType } from '@unity/types';

import Home from '@/Components/Home';
import { getByContentModel } from '@unity/api-methods';

type Result = {
  result: Array<HomepageType>;
}

const HomePage = async () => {
  console.log('Contentful env from page:', {
    hasSpaceId: Boolean(process.env.CONTENTFUL_SPACE_ID),
    hasAccessToken: Boolean(process.env.CONTENTFUL_ACCESS_TOKEN),
  });

  const data = await getByContentModel('homepage');

  if (!Array.isArray(data) || !data[0]) return <></>;

  const { result } = data[0] as unknown as Result;

  return <Home data={result[0]} />;
};

export default HomePage;
