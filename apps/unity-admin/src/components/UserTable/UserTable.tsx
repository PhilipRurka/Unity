'use client';

type UserTableProps = {
  userList: [];
};

const UserTable = ({ userList }: UserTableProps) => (
  <div data-component="cUserTable">
    {userList.map(() => (
      <></>
    ))}
  </div>
);

export default UserTable;
