'use client';

import { useRef, useState } from 'react';

import useUser from '@/Hooks/useUser';

import UserDetailsForm from './components/UserDetailsForm';
import EditableActions from './components/UserEditableActions';
import UserModels, { ModalType } from './components/UserModels';
import UserStatusChange from './components/UserStatusChange';
import UserTableTabs from './components/UserTableTabs';

const User = () => {
  const submitButtonRef = useRef<HTMLButtonElement>(null);

  const [modalType, setModalType] = useState<ModalType | null>(null);
  const [isEditState, setIsEditState] = useState(false);

  const { data: user } = useUser();

  if (!user) return <></>;

  const handleModalToggle = (type: ModalType | null) => {
    setModalType(type);
  };

  const handleIsEditToggle = (shouldBeEditState: boolean) => {
    setIsEditState(shouldBeEditState);
  };

  const handlCancelEdit = () => {
    if (typeof document === 'undefined') return;

    const nameInput: HTMLInputElement | null = document.querySelector('input#name');

    if (!nameInput) return;
    nameInput.value = user.name;
    setIsEditState(false);
  };

  const handleSave = () => {
    submitButtonRef.current?.click();
  };

  return (
    <div data-component="User" className="relative mx-auto max-w-xl">
      <UserModels modalType={modalType} handleModalToggle={handleModalToggle} user={user} />

      <EditableActions
        handlCancelEdit={handlCancelEdit}
        handleIsEditToggle={handleIsEditToggle}
        handleSave={handleSave}
        isEditState={isEditState}
      />

      <UserDetailsForm
        handleIsEditToggle={handleIsEditToggle}
        isEditState={isEditState}
        user={user}
        ref={submitButtonRef}
      />

      <UserStatusChange handleModalToggle={handleModalToggle} status={user.status} />

      <UserTableTabs />
    </div>
  );
};

export default User;
