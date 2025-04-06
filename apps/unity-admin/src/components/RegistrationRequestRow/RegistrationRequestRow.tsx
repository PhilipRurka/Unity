import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { formatDate } from 'src/utils';

import { Button, MenuIcon, Table } from '@unity/components';
import { RegistrationRequestFrontendType } from '@unity/types';

import Pill from '../Pill';
import { PillProps } from '../Pill/Pill';

type RegistrationRequestRowProps = {
  request: RegistrationRequestFrontendType;
};

type StatusObj = {
  color: PillProps['color'];
  statusCopy: 'Accepted' | 'Declined' | 'Pending' | 'Opps';
};

const RegistrationRequestRow = ({ request }: RegistrationRequestRowProps) => {
  const statusObj = (): StatusObj => {
    if (request.status === 'accepted') {
      return { color: 'green', statusCopy: 'Accepted' };
    }

    if (request.status === 'declined') {
      return { color: 'red', statusCopy: 'Declined' };
    }

    if (request.status === 'pending') {
      return { color: 'yellow', statusCopy: 'Pending' };
    }

    return { color: 'red', statusCopy: 'Opps' };
  };

  return (
    <div data-component="RegistrationRequestRow">
      <Table.Row>
        <Table.Data>{formatDate(request.createdAt)}</Table.Data>
        <Table.Data>
          <p className="text-md font-semibold">{request.name}</p>
          <p className="line-clamp-1 text-sm">{request.email}</p>
        </Table.Data>
        <Table.Data>
          <Pill text={statusObj().statusCopy} color={statusObj().color} />
        </Table.Data>
        <Table.Data>
          <div className="relative">
            <Link href={`/registration-request/${request.id}`}>
              <MenuIcon size="8" />
            </Link>
          </div>
        </Table.Data>
      </Table.Row>
    </div>
  );
};

export default RegistrationRequestRow;
