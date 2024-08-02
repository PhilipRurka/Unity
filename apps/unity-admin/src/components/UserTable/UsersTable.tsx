'use client';

import { UserDetailsType } from '@unity/types';

type UsersTableProps = {
  userDetailsList: UserDetailsType[];
};

const UsersTable = ({ userDetailsList }: UsersTableProps) => (
  <ul data-component="UsersTable">
    {userDetailsList.map((userDetail) => (
      <li key={`UsersTable-userDetailsList-${userDetail.user_id}`}>{userDetail.email}</li>
    ))}
  </ul>
);

export default UsersTable;
