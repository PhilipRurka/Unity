import { Button } from '@unity/components';

type UserEditableActionsProps = {
  isEditState: boolean;
  handleSave: () => void;
  handlCancelEdit: () => void;
  handleIsEditToggle: (shouldIsEditModel: boolean) => void;
};

const UserEditableActions = ({
  isEditState,
  handleSave,
  handlCancelEdit,
  handleIsEditToggle,
}: UserEditableActionsProps) => (
  <div data-component="UserEditableActions" className="mb-12 flex items-center justify-between">
    <h1 className="text-5xl">User Details</h1>
    <div className="">
      {isEditState ? (
        <div className="flex gap-4">
          <Button color="green" icon="save" iconPosition="left" size="small" onClick={handleSave}>
            Save
          </Button>
          <Button color="red" icon="xInCircle" iconPosition="left" size="small" onClick={handlCancelEdit}>
            Cancel
          </Button>
        </div>
      ) : (
        <Button color="black" icon="edit" iconPosition="left" size="small" onClick={() => handleIsEditToggle(true)}>
          Edit
        </Button>
      )}
    </div>
  </div>
);

export default UserEditableActions;
