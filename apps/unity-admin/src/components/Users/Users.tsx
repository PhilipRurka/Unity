'use client';

import { useEffect, useState } from 'react';

import { UserFrontendType } from '@unity/types';

import UserTable from '@/Components/UserTable';
import UsersFilter from '@/Components/UsersFilter';
import getUsers from '@/Fetchers/getUsers';

const Users = () => {
  const [usersList, setUsersList] = useState<UserFrontendType[]>([]);

  useEffect(() => {
    const getUsersList = async () => {
      const userList = await getUsers();
      setUsersList(userList);
    };

    getUsersList();
  }, []);

  return (
    <div data-component="Users">
      <h1 className="my-9 text-4xl">List of Users</h1>
      <UsersFilter usersLength={usersList.length} />
      <UserTable usersList={usersList} />
    </div>
  );
};

export default Users;
