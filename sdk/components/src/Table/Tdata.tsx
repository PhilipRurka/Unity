import clsx from 'clsx';
import React, { ReactNode } from 'react';

import { TableHeaders } from '@unity/types';

type TdataProps = { children: ReactNode; width: TableHeaders[1]['width'] };

const Tdata = ({ children, width }: TdataProps) => (
  <div data-component="Tdata" className={clsx('self-center', width === 'auto' ? 'flex-auto' : `w-${width}`)}>
    {children}
  </div>
);

export default Tdata;
