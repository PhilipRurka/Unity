import React, { HTMLProps, ReactNode } from 'react';

type LabelProps = HTMLProps<HTMLLabelElement> & {
  children: ReactNode;
};

const Label = ({ children, ...rest }: LabelProps) => (
  <label className="block text-sm font-medium text-gray-900" {...rest}>
    {children}
  </label>
);

export default Label;
