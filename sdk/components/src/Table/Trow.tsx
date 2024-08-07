import React, { ReactNode } from 'react';

type TrowProps = {
  children: ReactNode;
};

const Trow = ({ children }: TrowProps) => (
  <li data-component="Trow" className="flex gap-12 border border-solid border-gray-100 py-4">
    {children}
  </li>
);

export default Trow;
