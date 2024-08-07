// import UserTable from '@/Components/UserTable';
import UsersFilter from '@/Components/UsersFilter';

// import getUsers from '@/Fetchers/getUsers';

const UsersPage = async () => {
  // const userList = await getUsers();
  console.log('');
  return (
    <div data-component="UsersPage">
      <h1 className="my-9 text-4xl">List of Users</h1>
      <UsersFilter usersLength={userList.length} />
      {/* <UserTable usersList={userList} /> */}
    </div>
  );
};

export default UsersPage;
