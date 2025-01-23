import { HomepageType } from '@unity/types';

import Home from '@/Components/Home';
import getByContentModel from '@/Fetchers/contentful/getByContentModel';

const HomePage = async () => {
  const data: HomepageType[] = await getByContentModel('homepage');

  return <Home data={data[0]} />;
};

export default HomePage;
