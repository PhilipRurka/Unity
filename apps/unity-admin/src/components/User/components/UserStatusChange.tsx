import { Button } from '@unity/components';
import { UserStatus } from '@unity/types';

import { ModalType } from './UserModels';

type UserStatusChangeProps = {
  status: UserStatus;
  handleModalToggle: (modelType: ModalType | null) => void;
};

const UserStatusChange = ({ status, handleModalToggle }: UserStatusChangeProps) => (
  <>
    {status === 'active' && (
      <Button color="black" isFull={false} size="small" onClick={() => handleModalToggle('disable')}>
        Disable
      </Button>
    )}
    {status === 'disabled' && (
      <Button color="black" isFull={false} size="small" onClick={() => handleModalToggle('activate')}>
        Activate
      </Button>
    )}
  </>
);

export default UserStatusChange;
