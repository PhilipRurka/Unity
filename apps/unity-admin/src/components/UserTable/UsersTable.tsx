'use client';

import { UserFrontendType } from '@unity/types';

type UsersTableProps = {
  usersList: UserFrontendType[];
};

const UsersTable = ({ usersList }: UsersTableProps) => (
  <ul data-component="UsersTable">
    {usersList.map((user) => (
      <li key={`UsersTable-usersList-${user.user_id}`}>{user.email}</li>
    ))}
  </ul>
);

export default UsersTable;
