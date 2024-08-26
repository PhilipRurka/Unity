import React, { HTMLProps, ReactNode } from 'react';

type FieldProps = HTMLProps<HTMLDivElement> & {
  children: ReactNode;
};

const Field = ({ children, ...rest }: FieldProps) => (
  <div className="flex flex-col" {...rest}>
    {children}
  </div>
);

export default Field;
