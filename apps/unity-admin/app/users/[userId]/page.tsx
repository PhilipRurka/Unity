import User from '@/Components/User';

type UserProps = {
  params: {
    userId: string;
  };
};

const UserPage = async ({ params: { userId } }: UserProps) => <User userId={userId} />;

export default UserPage;
