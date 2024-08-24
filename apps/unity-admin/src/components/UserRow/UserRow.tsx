import { useEffect, useRef, useState } from 'react';
import { formatDate } from 'src/utils';

import { Button, MenuIcon, Tdata, Trow } from '@unity/components';
import { TableHeaders, UserBasicFrontendType } from '@unity/types';

import Pill from '@/Components/Pill';

import type { PillProps } from '../Pill/Pill';

type UserRowProps = {
  user: UserBasicFrontendType;
  headerList: TableHeaders;
};

type MenuStatusAction = {
  color: PillProps['color'];
  statusCopy: 'Active' | 'Disabled' | 'Pending' | 'Opps';
};

const UserRow = ({ user, headerList }: UserRowProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = (shouldOpen: boolean) => {
    setIsMenuOpen(shouldOpen);
  };

  const statusObj = (): MenuStatusAction => {
    if (user.status === 'active') {
      return { color: 'green', statusCopy: 'Active' };
    }

    if (user.status === 'disabled') {
      return { color: 'red', statusCopy: 'Disabled' };
    }

    if (user.status === 'pending') {
      return { color: 'yellow', statusCopy: 'Pending' };
    }

    return { color: 'red', statusCopy: 'Opps' };
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div data-component="UserRow">
      <Trow key={`UsersTable-usersList-${user.id}`}>
        <Tdata width={headerList[0].width}>
          <p className="text-md font-semibold">{user.name}</p>
          <p className="text-sm">{user.email}</p>
        </Tdata>
        <Tdata width={headerList[1].width}>
          <Pill text={statusObj().statusCopy} color={statusObj().color} />
        </Tdata>
        <Tdata width={headerList[2].width}>{user.lastActive ? formatDate(user.lastActive) : ''}</Tdata>
        <Tdata width={headerList[3].width}>{formatDate(user.createdAt)}</Tdata>
        <Tdata width={headerList[4].width}>
          <div ref={menuRef} className="relative">
            <button onClick={() => handleMenu(!isMenuOpen)}>
              <MenuIcon size="8" />
            </button>
            {isMenuOpen && (
              <div className="absolute bottom-full right-0 flex flex-col gap-4 bg-gray-100 p-4">
                <Button link={`/users/${user.id}`} color="black" isFull size="small" icon="edit" iconPosition="left">
                  Details
                </Button>
              </div>
            )}
          </div>
        </Tdata>
      </Trow>
    </div>
  );
};

export default UserRow;
