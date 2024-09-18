import Tabs from '@/Components/Tabs';

import UserActivities from './UserActivities';
import UserLogs from './UserLogs';

const UserTableTabs = () => (
  <div data-component="UserTableTabs" className="mt-16">
    <Tabs defaultView="logs">
      <Tabs.Header>
        <Tabs.Heading view="logs">Logs</Tabs.Heading>
        <Tabs.Heading view="activities">Activities</Tabs.Heading>
      </Tabs.Header>
      <Tabs.Content>
        <Tabs.View view="logs">
          <UserLogs />
          {/* <UserLogs /> */}
        </Tabs.View>
        <Tabs.View view="activities">
          <UserActivities />
        </Tabs.View>
      </Tabs.Content>
    </Tabs>
  </div>
);

export default UserTableTabs;
