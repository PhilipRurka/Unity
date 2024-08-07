import clsx from 'clsx';
import React from 'react';

import { TableHeaders } from '@unity/types';

type TheaderProps = {
  headerList: TableHeaders;
};

const Theader = ({ headerList }: TheaderProps) => (
  <div header-component="Theader" className="flex gap-12 rounded-md bg-gray-100 p-1 ">
    {headerList.map((header) => (
      <div
        key={`UsersTable-header-${header.property}`}
        className={clsx('text-sm', header.width === 'auto' ? 'flex-auto' : `w-${header.width}`)}
      >
        {header.label}
      </div>
    ))}
  </div>
);

export default Theader;
