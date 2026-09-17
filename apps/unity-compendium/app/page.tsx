import { getByContentModel } from '@unity/api-methods';
import { HomepageType } from '@unity/types';

import Home from '@/Components/Home';

type Result = {
  result: Array<HomepageType>;
};

const HomePage = async () => {
  const data = await getByContentModel('homepage');

  if (!Array.isArray(data) || !data[0]) return <></>;

  const { result } = data[0] as unknown as Result;

  return <Home data={result[0]} />;
};

export default HomePage;
