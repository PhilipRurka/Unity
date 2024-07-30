'use client';

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

type AuthProviderProps = {
  children: ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => <SessionProvider>{children}</SessionProvider>;

export default AuthProvider;
