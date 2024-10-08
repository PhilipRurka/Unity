'use client';

import UsersFilter from '@/Components/UsersFilter';
import UsersTable from '@/Components/UsersTable';
import useUsers from '@/Hooks/useUsers';

const Users = () => {
  const { data: usersList = [] } = useUsers();

  return (
    <div data-component="Users">
      <h1 className="my-9 text-4xl">List of Users</h1>
      <UsersFilter usersLength={usersList.length} />
      <UsersTable usersList={usersList} />
    </div>
  );
};

export default Users;
