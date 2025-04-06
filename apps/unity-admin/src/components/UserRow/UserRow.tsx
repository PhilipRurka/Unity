import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { formatDate } from 'src/utils';

import { Button, MenuIcon, Table } from '@unity/components';
import type { UserBasicFrontendType } from '@unity/types';

import Pill from '@/Components/Pill';

import type { PillProps } from '../Pill/Pill';

type UserRowProps = {
  user: UserBasicFrontendType;
};

type MenuStatusAction = {
  color: PillProps['color'];
  statusCopy: 'Active' | 'Disabled' | 'Pending' | 'Opps';
};

const UserRow = ({ user }: UserRowProps) => {
  const statusObj = (): MenuStatusAction => {
    if (user.status === 'active') {
      return { color: 'green', statusCopy: 'Active' };
    }

    if (user.status === 'disabled') {
      return { color: 'red', statusCopy: 'Disabled' };
    }

    if (user.status === 'pending') {
      return { color: 'yellow', statusCopy: 'Pending' };
    }

    return { color: 'red', statusCopy: 'Opps' };
  };

  return (
    <div data-component="UserRow">
      <Table.Row>
        <Table.Data>
          <p className="text-md font-semibold">{user.name}</p>
          <p className="line-clamp-1 text-sm">{user.email}</p>
        </Table.Data>
        <Table.Data>
          <Pill text={statusObj().statusCopy} color={statusObj().color} />
        </Table.Data>
        <Table.Data>{user.lastActive ? formatDate(user.lastActive) : ''}</Table.Data>
        <Table.Data>{formatDate(user.createdAt)}</Table.Data>
        <Table.Data>
          <div className="relative">
            {user.name !== 'Philip Rurka' && (
              <Link href={`/users/${user.id}`}>
                <MenuIcon size="8" />
              </Link>
            )}
          </div>
        </Table.Data>
      </Table.Row>
    </div>
  );
};

export default UserRow;
