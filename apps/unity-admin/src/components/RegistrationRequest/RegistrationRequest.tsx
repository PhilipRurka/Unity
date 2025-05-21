'use client';

import clsx from 'clsx';
import { useState } from 'react';
import { formatDate } from 'src/utils';
import { mutate } from 'swr';

import { Button } from '@unity/components';

import updateRegistrationRequestStatus from '@/Fetchers/updateRegistrationRequestStatus';
import useRegistrationRequest from '@/Hooks/useRegistrationRequest';

import RegistrationRequestStatusModal, { ModalType } from './components/RegistrationRequestStatusModal';

const RegistrationRequest = () => {
  const [modalType, setModalType] = useState<ModalType | null>(null);

  const { data: requestData } = useRegistrationRequest();

  if (!requestData) return <></>;

  const handleModalToggle = (type: ModalType | null) => {
    setModalType(type);
  };

  const handleStatusAccepted = async () => {
    await updateRegistrationRequestStatus({ id: requestData.id, status: 'accepted' });
    mutate(`registrationRequest-${requestData.id}`);
  };

  const { createdAt, name, email, message, status, reasonForDecline } = requestData;

  return (
    <div data-component="RegistrationRequest">
      <RegistrationRequestStatusModal
        modalType={modalType}
        handleModalToggle={handleModalToggle}
        requestData={requestData}
      />
      <h1 className="text-5xl">Registration Request</h1>
      <div className="mt-10 flex flex-col gap-6">
        <div>
          <p className="font-bold">Requested At</p>
          <p>{formatDate(createdAt)}</p>
        </div>
        <div>
          <p className="font-bold">Name</p>
          <p>{name}</p>
        </div>
        <div>
          <p className="font-bold">Email</p>
          <p>{email}</p>
        </div>
        <div>
          <p className="font-bold">Message</p>
          <p>{message}</p>
        </div>
        <div>
          <p className="font-bold">Status</p>
          <div className="flex justify-between gap-4">
            <p
              className={clsx(
                status === 'accepted' && 'text-green-600',
                status === 'pending' && 'text-yellow-600',
                status === 'declined' && 'text-red-600'
              )}
            >
              {status}
            </p>
            <div className="flex gap-4">
              {(status === 'declined' || status === 'pending') && (
                <Button isFull color="green" size="medium" onClick={handleStatusAccepted}>
                  Accept
                </Button>
              )}
              {status === 'pending' && (
                <Button color="red" size="medium" onClick={() => handleModalToggle('decline')}>
                  Decline
                </Button>
              )}
            </div>
          </div>
        </div>
        {status === 'declined' && (
          <div>
            <p className="font-bold">Reason For Decline</p>
            <p>{reasonForDecline}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationRequest;
