import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { ComponentType, useEffect, useState } from 'react';

import { UserBasicFrontendType } from '@unity/types';

import getUser from '@/Fetchers/user/getUser';

function getDisplayName<P>(WrappedComponent: ComponentType<P>) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function withDisableCheck<P extends object>(WrappedComponent: ComponentType<P>) {
  const DisableCheck = (props: P) => {
    const { data: session } = useSession();
    const [user, setUser] = useState<UserBasicFrontendType>();
    const router = useRouter();

    useEffect(() => {
      const run = async () => {
        if (!session || user) return;

        const gotUser = await getUser(session.user.id);
        setUser(gotUser);
      };

      run();
    }, [session, user]);

    useEffect(() => {
      if (user?.status === 'disabled') {
        signOut({ callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/` });
      }
    }, [user, router]);

    if (!session || !user || user.status === 'disabled') return <></>;

    return <WrappedComponent {...props} />;
  };

  DisableCheck.displayName = `withDisableCheck
  (${getDisplayName(WrappedComponent)})`;

  return DisableCheck;
}

export default withDisableCheck;
