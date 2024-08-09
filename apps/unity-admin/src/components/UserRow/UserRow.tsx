import { useEffect, useRef, useState } from 'react';
import { formatDate } from 'src/utils';

import { Button, MenuIcon, Tdata, Trow } from '@unity/components';
import { Icons as ButtonIcons } from '@unity/components/src/Button/Button';
import { TableHeaders, UserFrontendType } from '@unity/types';

type UserRowProps = {
  user: UserFrontendType;
  headerList: TableHeaders;
};

type MenuStatusAction =
  | undefined
  | {
      copy: string;
      icon: ButtonIcons;
    };

const UserRow = ({ user, headerList }: UserRowProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = (shouldOpen: boolean) => {
    setIsMenuOpen(shouldOpen);
  };

  const menuStatusAction = (): MenuStatusAction => {
    if (user.status === 'active') return { copy: 'Disable', icon: 'xInCircle' };

    if (user.status === 'disabled') return { copy: 'Sctivate', icon: 'plusInCircle' };

    if (user.status === 'pending') return { copy: 'Cancel', icon: 'xInCircle' };

    return undefined;
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
      <Trow key={`UsersTable-usersList-${user.user_id}`}>
        <Tdata width={headerList[0].width}>
          <p className="text-md font-semibold">{user.name}</p>
          <p className="text-sm">{user.email}</p>
        </Tdata>
        <Tdata width={headerList[1].width}>{user.status}</Tdata>
        <Tdata width={headerList[2].width}>{user.last_active ? formatDate(user.last_active) : ''}</Tdata>
        <Tdata width={headerList[3].width}>{formatDate(user.created_at)}</Tdata>
        <Tdata width={headerList[4].width}>
          <div ref={menuRef} className="relative">
            <button onClick={() => handleMenu(!isMenuOpen)}>
              <MenuIcon size="8" />
            </button>
            {isMenuOpen && (
              <div className="absolute bottom-full right-0 flex flex-col gap-4 bg-gray-100 p-4">
                <Button color="black" isFull size="small" icon="edit" iconPosition="left">
                  Edit
                </Button>
                <Button color="black" isFull size="small" icon={menuStatusAction()?.icon} iconPosition="left">
                  {menuStatusAction()?.copy}
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
