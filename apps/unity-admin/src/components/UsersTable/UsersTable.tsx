import { useState } from 'react';

import { Table } from '@unity/components';
import { UserBasicFrontendType } from '@unity/types';

import UserRow from '../UserRow';

type UsersTableProps = {
  usersList: UserBasicFrontendType[];
};

const UsersTable = ({ usersList }: UsersTableProps) => {
  const [filteredList, setFilteredList] = useState<UserBasicFrontendType[]>([]);

  // TODO: Remove this type any
  const handleFilterChange = (list: any) => {
    setFilteredList(list);
  };

  return (
    <div data-component="UsersTable">
      <Table
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
