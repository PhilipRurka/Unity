import { HTMLProps, ReactNode } from 'react';

type LabelProps = HTMLProps<HTMLLabelElement> & {
  children: ReactNode;
};

const Label = ({ children, ...rest }: LabelProps) => (
  <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white" {...rest}>
    {children}
  </label>
);

export default Label;
