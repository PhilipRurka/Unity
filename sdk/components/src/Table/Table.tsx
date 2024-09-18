// TODO: Convert into solid multy component
import React, { ReactNode } from 'react';

type TableProps = {
  children: ReactNode;
};

const Table = ({ children }: TableProps) => <div data-component="Table">{children}</div>;

export default Table;
