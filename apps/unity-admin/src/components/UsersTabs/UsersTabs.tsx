import Tabs from '@/Components/Tabs';
import useUsers from '@/Hooks/useUsers';

import RegistrationRequestsTable from '../RegistrationRequestsTable';
import UsersFilter from '../UsersFilter';
import UsersTable from '../UsersTable';

const UserTableTabs = () => {
  const { data: usersList = [] } = useUsers();

  return (
    <div data-component="UserTableTabs" className="mt-16">
      <Tabs defaultView="active">
        <Tabs.Header>
          <Tabs.Heading view="active">Active Users</Tabs.Heading>
          <Tabs.Heading view="registration-request">Registration Requests</Tabs.Heading>
        </Tabs.Header>
        <Tabs.Content>
          <Tabs.View view="active">
            <h1 className="my-9 text-4xl">List of Users</h1>
            <UsersFilter usersLength={usersList.length} />
            <UsersTable />
          </Tabs.View>
          <Tabs.View view="registration-request">
            <h1 className="my-9 text-4xl">List of Requests</h1>
            <RegistrationRequestsTable />
          </Tabs.View>
        </Tabs.Content>
      </Tabs>
    </div>
  );
};

export default UserTableTabs;
