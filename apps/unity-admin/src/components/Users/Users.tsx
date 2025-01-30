'use client';

import UsersFilter from '@/Components/UsersFilter';
import useUsers from '@/Hooks/useUsers';

import UsersTabs from '../UsersTabs';

const Users = () => {
  const { data: usersList = [] } = useUsers();

  return (
    <div data-component="Users">
      <UsersFilter usersLength={usersList.length} />
      <UsersTabs />
    </div>
  );
};

export default Users;
