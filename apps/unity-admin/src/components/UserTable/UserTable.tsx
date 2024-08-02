'use client';

import { UserDetailsType } from '@unity/types';

type UserTableProps = {
  userDetailsList: UserDetailsType[];
};

const UserTable = ({ userDetailsList }: UserTableProps) => (
  <ul data-component="cUserTable">
    {userDetailsList.map((userDetail) => (
      <li key={`UserTable-userDetailsList-${userDetail.user_id}`}>{userDetail.email}</li>
    ))}
  </ul>
);

export default UserTable;
