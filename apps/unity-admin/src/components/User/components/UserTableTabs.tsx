import Tabs from '@/Components/Tabs';

const UserTableTabs = () => (
  <div data-component="UserTableTabs" className="mt-16">
    <Tabs defaultView="logs">
      <Tabs.Header>
        <Tabs.Heading view="logs">Logs</Tabs.Heading>
        <Tabs.Heading view="activities">Activities</Tabs.Heading>
      </Tabs.Header>
      <Tabs.Content>
        <Tabs.View view="logs">
          <div className="h-7 w-7 bg-red-500">View 1</div>
        </Tabs.View>
        <Tabs.View view="activities">
          <div className="h-7 w-7 bg-green-500">View 2</div>
        </Tabs.View>
      </Tabs.Content>
    </Tabs>
  </div>
);

export default UserTableTabs;
