import { Button } from '@unity/components';

type EditableActionsProps = {
  isEditState: boolean;
  handleSave: () => void;
  handlCancelEdit: () => void;
  handleIsEditToggle: (shouldIsEditModel: boolean) => void;
};

const EditableActions = ({ isEditState, handleSave, handlCancelEdit, handleIsEditToggle }: EditableActionsProps) => (
  <div data-component="EditableActions" className="mb-12 flex items-center justify-between">
    <h1 className="text-5xl">User Details</h1>
    <div className="">
      {isEditState ? (
        <div className="flex gap-4">
          <Button color="black" icon="save" iconPosition="left" size="small" onClick={handleSave}>
            Save
          </Button>
          <Button color="black" isFull icon="xInCircle" iconPosition="left" size="small" onClick={handlCancelEdit}>
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

export default EditableActions;
