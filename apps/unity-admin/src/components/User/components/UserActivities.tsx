import { useMemo, useState } from 'react';

import { Table } from '@unity/components';
import { ActivitiesBundleType } from '@unity/types';

import ActivityRow from '@/Components/ActivityRow';
import useActivities from '@/Hooks/useActivities';

const UserActivities = () => {
  const [filteredList, setFilteredList] = useState<ActivitiesBundleType[]>([]);

  const { data: userActivities = [] } = useActivities();

  const bundleList = useMemo(() => {
    if (userActivities.length === 0) return [];

    const newList: ActivitiesBundleType[] = [];

    let latestDate: Date | undefined;

    for (let i = 0; i < userActivities.length; i += 1) {
      const { date: rawDate, slug } = userActivities[i];
      const date = new Date(rawDate);

      const hours = date.getHours();
      const minutes = date.getMinutes();

      const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

      const startOfDay = new Date(date.getFullYear(), date.getMonth(), date.getDate());

      if (latestDate && latestDate.getTime() === startOfDay.getTime()) {
        newList[newList.length - 1].activities.push({ time: formattedTime, slug });
      } else {
        latestDate = startOfDay;

        newList.push({
          timestamp: startOfDay,
          activities: [{ time: formattedTime, slug }],
        });
      }
    }

    return newList;
  }, [userActivities]);

  // TODO: Remove this type any
  const handleFilterChange = (list: any) => {
    setFilteredList(list);
  };

  if (!userActivities) return <></>;

  return (
    <div data-component="UserActivities" className="mt-8">
      <Table
        gridCols="grid-cols-user-activities"
        defaultFilterProperty="timestamp"
        listForFilter={bundleList}
        handleFilterUpdateCallback={handleFilterChange}
      >
        <Table.Header>
          <Table.Heading property="timestamp">Timestamp</Table.Heading>
          <Table.Heading>Activity</Table.Heading>
        </Table.Header>
        <Table.Content>
          <>
            {filteredList.map((bundle, index) => (
              <ActivityRow key={`UserActivities-${bundle.timestamp}-${index}`} bundle={bundle} />
            ))}
          </>
        </Table.Content>
      </Table>
    </div>
  );
};

export default UserActivities;
