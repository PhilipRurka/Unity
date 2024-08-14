'use client';

import useUser from '@/Hooks/useUser';

type UserProps = {
  userId: string;
};

const User = ({ userId }: UserProps) => {
  const { data: user } = useUser(userId);

  return (
    <div data-component="User">
      <p>{user?.name}</p>
      <p>{user?.email}</p>
    </div>
  );
};

export default User;
