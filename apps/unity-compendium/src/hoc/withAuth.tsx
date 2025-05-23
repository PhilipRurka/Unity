import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { ComponentType, useEffect, useState } from 'react';

import { UserBasicFrontendType } from '@unity/types';

import getUser from '@/Fetchers/user/getUser';
import updateUserStatus from '@/Fetchers/user/updateUser';

function getDisplayName<P>(WrappedComponent: ComponentType<P>) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function withAuth<P extends object>(WrappedComponent: ComponentType<P>) {
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
        signOut({ callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/login` });
      } else if (user?.status === 'pending') {
        updateUserStatus({
          userId: user.id,
          toUpdate: { status: 'active' },
          log: { type: 'statusChange', from: 'pending', timestamp: new Date(), to: 'active' },
        });
      }
    }, [user, router]);

    if (!session || !user || user.status === 'disabled') return <></>;

    return <WrappedComponent {...props} />;
  };

  DisableCheck.displayName = `withAuth
  (${getDisplayName(WrappedComponent)})`;

  return DisableCheck;
}

export default withAuth;
