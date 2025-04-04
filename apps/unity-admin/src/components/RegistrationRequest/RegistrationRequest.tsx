'use client';

import { formatDate } from 'src/utils';

// import { Button } from '@unity/components';
import useRegistrationRequest from '@/Hooks/useRegistrationRequest';

const RegistrationRequest = () => {
  const { data: requestData } = useRegistrationRequest();

  if (!requestData) return <></>;

  return (
    <div data-component="RegistrationRequest">
      <h1 className="text-5xl">Registration Request</h1>
      <div>
        <div>
          <p>Requested At</p>
          <p>{formatDate(requestData.createdAt)}</p>
        </div>
        <div>
          <p>Name</p>
          <p>{requestData.name}</p>
        </div>
        <div>
          <p>Email</p>
          <p>{requestData.email}</p>
        </div>
        <div>
          <p>Message</p>
          <p>{requestData.message}</p>
        </div>
        <div>
          {/* <Button>Accept</Button>
          <Button>Decline</Button> */}
        </div>
      </div>
    </div>
  );
};

export default RegistrationRequest;
