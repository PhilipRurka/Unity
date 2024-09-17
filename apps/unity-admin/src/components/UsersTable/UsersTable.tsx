import { Table, Theader } from '@unity/components';
import { TableHeaders, UserBasicFrontendType } from '@unity/types';

import UserRow from './components/UserRow';

type UsersTableProps = {
  usersList: UserBasicFrontendType[];
};

const headerList: TableHeaders = [
  {
    label: 'Name',
    property: 'name',
    width: 'auto',
  },
  {
    label: 'Status',
    property: 'status',
    width: '28',
  },
  {
    label: 'Last Active',
    property: 'lastActive',
    width: '40',
  },
  {
    label: 'Created At',
    property: 'createdAt',
    width: '40',
  },
  {
    label: '',
    property: '',
    width: '8',
  },
];

const UsersTable = ({ usersList }: UsersTableProps) => (
  <div data-component="UsersTable">
    <Table>
      <>
        <Theader headerList={headerList} />
        <ul className="px-1">
          {usersList.map((user) => (
            <UserRow key={`UserList-row-${user.name}`} user={user} headerList={headerList} />
          ))}
        </ul>
      </>
    </Table>
  </div>
);

export default UsersTable;
