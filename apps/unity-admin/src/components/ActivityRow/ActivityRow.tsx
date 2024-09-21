import clsx from 'clsx';
import { useState } from 'react';
import { formatDate } from 'src/utils';

import { Table } from '@unity/components';
import TriangleIcon from '@unity/components/src/Icons/TriangleIcon';
import { ActivitiesBundleType } from '@unity/types';

type ActivityRowProps = { bundle: ActivitiesBundleType };

const ActivityRow = ({ bundle }: ActivityRowProps) => {
  const [isActivitiesShown, setIsActivitiesShown] = useState(false);

  const handleSubItemAccordion = () => {
    setIsActivitiesShown(!isActivitiesShown);
  };

  return (
    <div data-component="ActivityRow">
      <Table.Row>
        <Table.Data>
          <p className="text-sm">{formatDate(bundle.timestamp, true)}</p>
        </Table.Data>
        <Table.Data>
          <div className="flex cursor-pointer gap-1" onClick={handleSubItemAccordion}>
            <p className="text-sm font-bold">{`${bundle.activities.length} ${
              bundle.activities.length === 1 ? 'Activity' : 'Activities'
            }`}</p>
            <TriangleIcon
              size="3"
              className={clsx(
                'transition-transform',
                !isActivitiesShown ? 'opened-accordion-triangle' : 'closed-accordion-triangle'
              )}
            />
          </div>
          <div className={clsx(isActivitiesShown ? 'block' : 'hidden')}>
            <Table gridCols="grid-cols-activity-bundle">
              <Table.Content>
                <>
                  {bundle.activities.map((item, i) => (
                    <Table.Row key={`ActivityRow-${i}`}>
                      <Table.Data>
                        <p className="text-sm">{item.time}</p>
                      </Table.Data>
                      <Table.Data>{item.slug}</Table.Data>
                    </Table.Row>
                  ))}
                </>
              </Table.Content>
            </Table>
          </div>
        </Table.Data>
      </Table.Row>
    </div>
  );
};

export default ActivityRow;
