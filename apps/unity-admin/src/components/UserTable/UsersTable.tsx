'use client';

import { formatDate } from 'src/utils';

import { Table, Tdata, Theader, Trow } from '@unity/components';
import { TableHeaders, UserFrontendType } from '@unity/types';

type UsersTableProps = {
  usersList: UserFrontendType[];
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
    width: '40',
  },
  {
    label: 'Last Active',
    property: 'last_active',
    width: '40',
  },
  {
    label: 'Created At',
    property: 'created_at',
    width: '40',
  },
];

const UsersTable = ({ usersList }: UsersTableProps) => (
  <ul data-component="UsersTable">
    <Table>
      <>
        <Theader headerList={headerList} />
        <ul className="px-1">
          {usersList.map((user) => (
            <Trow key={`UsersTable-usersList-${user.user_id}`}>
              <Tdata width={headerList[0].width}>
                <p className="text-md font-semibold">{user.name}</p>
                <p className="text-sm">{user.email}</p>
              </Tdata>
              <Tdata width={headerList[1].width}>{user.status}</Tdata>
              <Tdata width={headerList[2].width}>{user.last_active ? formatDate(user.last_active) : ''}</Tdata>
              <Tdata width={headerList[3].width}>{formatDate(user.created_at)}</Tdata>
            </Trow>
          ))}
        </ul>
      </>
    </Table>
  </ul>
);

export default UsersTable;
