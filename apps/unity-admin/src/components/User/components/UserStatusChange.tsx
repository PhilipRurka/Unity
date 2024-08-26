import { Button, Field, Input, Label } from '@unity/components';
import { UserStatus } from '@unity/types';

import { ModalType } from './UserModels';

type UserStatusChangeProps = {
  status: UserStatus;
  handleModalToggle: (modelType: ModalType | null) => void;
};

const UserStatusChange = ({ status, handleModalToggle }: UserStatusChangeProps) => (
  <Field>
    <Label>Status</Label>
    <div className="flex justify-between gap-4">
      <Input
        type="email"
        readOnly
        isInlineWithContent
        defaultValue={status}
        className="inline-block read-only:border-0 read-only:bg-transparent read-only:outline-none read-only:ring-transparent read-only:focus:border-0"
      />
      {status === 'active' && (
        <Button
          color="red"
          isFull={false}
          size="small"
          icon="triangleDownCircle"
          iconPosition="left"
          onClick={() => handleModalToggle('disable')}
        >
          Disable
        </Button>
      )}
      {status === 'disabled' && (
        <Button
          color="green"
          isFull={false}
          icon="triangleUpCircle"
          iconPosition="left"
          size="small"
          onClick={() => handleModalToggle('activate')}
        >
          Activate
        </Button>
      )}
    </div>
  </Field>
);

export default UserStatusChange;
