'use client';

import UserTable from '@/Components/UserTable';
import UsersFilter from '@/Components/UsersFilter';
import useUsers from '@/Hooks/useUsers';

const Users = () => {
  // const {data: usersList, usersError, usersIsLoading} = useUsers();
  const { data: usersList = [] } = useUsers();

  return (
    <div data-component="Users">
      <h1 className="my-9 text-4xl">List of Users</h1>
      <UsersFilter usersLength={usersList.length} />
      <UserTable usersList={usersList} />
    </div>
  );
};

export default Users;
