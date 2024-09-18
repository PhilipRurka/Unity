import clsx from 'clsx';
import React, { ReactNode } from 'react';

import { TableHeaders } from '@unity/types';

type TdataProps = { children: ReactNode; width: TableHeaders[1]['width']; className?: string };

const Tdata = ({ children, width, className = '' }: TdataProps) => (
  <div data-component="Tdata" className={clsx('self-center', width === 'auto' ? 'flex-auto' : `w-${width}`, className)}>
    {children}
  </div>
);

export default Tdata;
