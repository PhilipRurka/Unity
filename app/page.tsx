import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

import Home from '@/Components/Home';
import authOptions from '@/Lib/authOptions';

const HomePage = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('articles/unity-race');
  }

  return <Home />;
};

export default HomePage;
