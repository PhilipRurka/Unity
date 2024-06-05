import React, { HTMLProps, ReactNode } from 'react';

type ErrorSpanProps = HTMLProps<HTMLSpanElement> & {
  children: ReactNode;
};

const ErrorSpan = ({ children, ...rest }: ErrorSpanProps) => <span {...rest}>{children}</span>;

export default ErrorSpan;
