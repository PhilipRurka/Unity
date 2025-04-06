import { Table } from '@unity/components';
import { RegistrationRequestFrontendType } from '@unity/types';

import useRegistrationRequests from '@/Hooks/useRegistrationRequests';

import RegistrationRequestRow from '../RegistrationRequestRow';

const RegistrationRequestsTable = () => {
  const { data: registrationRequestList = [] } = useRegistrationRequests();

  return (
    <div data-component="RegistrationRequestsTable">
      <Table<RegistrationRequestFrontendType>
        gridCols="grid-cols-registration-request"
        listForFilter={registrationRequestList}
        defaultFilterProperty="createdAt"
      >
        <Table.Header>
          <Table.Heading property="createdAt">requested At</Table.Heading>
          <Table.Heading property="name">Name</Table.Heading>
          <Table.Heading property="source-type">Source Type</Table.Heading>
        </Table.Header>
        <Table.Content>
          <>
            {registrationRequestList.map((request) => (
              <RegistrationRequestRow key={`UsersTable-${request.name}`} request={request} />
            ))}
          </>
        </Table.Content>
      </Table>
    </div>
  );
};

export default RegistrationRequestsTable;
