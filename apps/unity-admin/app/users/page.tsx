import UserTable from '@/Components/UserTable';
import getUsersDetails from '@/Fetchers/getUsersDetails';

const UsersPage = async () => {
  const userDetailsList = await getUsersDetails();

  return <UserTable userDetailsList={userDetailsList} />;
};

export default UsersPage;
