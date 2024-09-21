import { formatDate } from 'src/utils';

import { Table } from '@unity/components';
import { ActivityType } from '@unity/types';

import useActivities from '@/Hooks/useActivities';

const UserActivities = () => {
  const { data: userActivities = [] } = useActivities();

  if (!userActivities) return <></>;

  return (
    <div data-component="UserActivities" className="mt-8">
      <Table gridCols="grid-cols-user-activities">
        <Table.Header>
          <Table.Heading>Timestamp</Table.Heading>
          <Table.Heading>Activity</Table.Heading>
        </Table.Header>
        <Table.Content>
          <>
            {userActivities.map((activity: ActivityType, index) => (
              <Table.Row key={`UserActivities-${activity.date}-${index}`}>
                <Table.Data>
                  <p className="text-sm">{formatDate(activity.date)}</p>
                </Table.Data>
                <Table.Data>
                  <p className="text-sm">{activity.slug}</p>
                </Table.Data>
              </Table.Row>
            ))}
          </>
        </Table.Content>
      </Table>
    </div>
  );
};

export default UserActivities;
