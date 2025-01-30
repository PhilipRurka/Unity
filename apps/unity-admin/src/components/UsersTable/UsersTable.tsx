import { useState } from 'react';

import { Table } from '@unity/components';
import { UserBasicFrontendType } from '@unity/types';

import useUsers from '@/Hooks/useUsers';

import UserRow from '../UserRow';

const UsersTable = () => {
  const { data: usersList = [] } = useUsers();

  const [filteredList, setFilteredList] = useState<UserBasicFrontendType[]>(usersList);

  const handleFilterChange = (list: UserBasicFrontendType[]) => {
    setFilteredList(list);
  };

  return (
    <div data-component="UsersTable">
      <Table<UserBasicFrontendType>
        gridCols="grid-cols-user-table"
        handleFilterUpdateCallback={handleFilterChange}
        listForFilter={usersList}
        defaultFilterProperty="status"
      >
        <Table.Header>
          <Table.Heading property="name">Name</Table.Heading>
          <Table.Heading property="status">Status</Table.Heading>
          <Table.Heading property="lastActive">Last Active</Table.Heading>
          <Table.Heading property="createdAt">Created At</Table.Heading>
        </Table.Header>
        <Table.Content>
          <>
            {filteredList.map((user) => (
              <UserRow key={`UsersTable-${user.name}`} user={user} />
            ))}
          </>
        </Table.Content>
      </Table>
    </div>
  );
};

export default UsersTable;
