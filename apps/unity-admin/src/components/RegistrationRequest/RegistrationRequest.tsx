'use client';

import { formatDate } from 'src/utils';

import { Button } from '@unity/components';
import { RegistrationRequestStatus } from '@unity/types';

import updateRegistrationRequestStatus from '@/Fetchers/updateRegistrationRequestStatus';
import useRegistrationRequest from '@/Hooks/useRegistrationRequest';

const RegistrationRequest = () => {
  const { data: requestData } = useRegistrationRequest();

  if (!requestData) return <></>;

  const handleStatusUpdate = async (status: RegistrationRequestStatus) => {
    await updateRegistrationRequestStatus({ requestId: requestData.id, status });
  };

  return (
    <div data-component="RegistrationRequest">
      <h1 className="text-5xl">Registration Request</h1>
      <div className="mt-10 flex flex-col gap-6">
        <div>
          <p className="font-bold">Requested At</p>
          <p>{formatDate(requestData.createdAt)}</p>
        </div>
        <div>
          <p className="font-bold">Name</p>
          <p>{requestData.name}</p>
        </div>
        <div>
          <p className="font-bold">Email</p>
          <p>{requestData.email}</p>
        </div>
        <div>
          <p className="font-bold">Message</p>
          <p>{requestData.message}</p>
        </div>
        <div className="mt-10 flex gap-4">
          <Button isFull color="green" size="medium" onClick={() => handleStatusUpdate('accepted')}>
            Accept
          </Button>
          <Button color="red" size="medium" onClick={() => handleStatusUpdate('declined')}>
            Decline
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationRequest;
