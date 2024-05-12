import { HTMLProps, ReactNode } from 'react';

type FormProps = HTMLProps<HTMLFormElement> & {
  children: ReactNode;
};

const Form = ({ children, ...rest }: FormProps) => (
  <form className="mt-8 space-y-6" {...rest}>
    {children}
  </form>
);

export default Form;
