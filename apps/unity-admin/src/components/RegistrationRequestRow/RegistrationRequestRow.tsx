import { useEffect, useRef, useState } from 'react';
import { formatDate } from 'src/utils';

import { Button, MenuIcon, Table } from '@unity/components';
import { RegistrationRequestFrontendType } from '@unity/types';

type RegistrationRequestRowProps = {
  request: RegistrationRequestFrontendType;
};

const RegistrationRequestRow = ({ request }: RegistrationRequestRowProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = (shouldOpen: boolean) => {
    setIsMenuOpen(shouldOpen);
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
    <div data-component="RegistrationRequestRow">
      <Table.Row>
        <Table.Data>{formatDate(request.createdAt)}</Table.Data>
        <Table.Data>
          <p className="text-md font-semibold">{request.name}</p>
          <p className="line-clamp-1 text-sm">{request.email}</p>
        </Table.Data>
        <Table.Data>
          <div ref={menuRef} className="relative">
            <>
              <button onClick={() => handleMenu(!isMenuOpen)}>
                <MenuIcon size="8" />
              </button>
              {isMenuOpen && (
                <div className="absolute bottom-full right-0 flex flex-col gap-4 bg-gray-100 p-4">
                  <Button
                    link={`/registration-request/${request.id}`}
                    color="black"
                    isFull
                    size="small"
                    icon="edit"
                    iconPosition="left"
                  >
                    Details
                  </Button>
                </div>
              )}
            </>
          </div>
        </Table.Data>
      </Table.Row>
    </div>
  );
};

export default RegistrationRequestRow;
