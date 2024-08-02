import UserTable from '@/Components/UserTable';
import UsersFilter from '@/Components/UsersFilter';
import getUsersDetails from '@/Fetchers/getUsersDetails';

const UsersPage = async () => {
  const userDetailsList = await getUsersDetails();

  return (
    <div data-component="UsersPage">
      <h1>List of Users</h1>
      <UsersFilter />
      <UserTable userDetailsList={userDetailsList} />
    </div>
  );
};

export default UsersPage;
