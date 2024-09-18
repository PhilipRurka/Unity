import { formatDate } from 'src/utils';

import { Table, Tdata, Theader, Trow } from '@unity/components';
import { ActivityType, TableHeaders } from '@unity/types';

import useActivities from '@/Hooks/useActivities';

const headerList: TableHeaders = [
  {
    label: 'Timestamp',
    property: 'timestamp',
    width: '32',
  },
  {
    label: 'Activities',
    property: 'activities',
    width: 'auto',
  },
];

const UserActivities = () => {
  const { data: userActivities = [] } = useActivities();

  if (!userActivities) return <></>;

  return (
    <div data-component="UserActivities" className="mt-8">
      <Table>
        <>
          <Theader headerList={headerList} />
          <ul className="px-1">
            {userActivities.map((activity: ActivityType, index) => (
              <Trow key={`UserActivities-${activity.date}-${index}`}>
                <Tdata width={headerList[0].width}>
                  <p className="text-sm">{formatDate(activity.date)}</p>
                </Tdata>
                <Tdata width={headerList[1].width}>
                  <p className="text-sm">{activity.slug}</p>
                </Tdata>
              </Trow>
            ))}
          </ul>
        </>
      </Table>
    </div>
  );
};

export default UserActivities;
