import { Table, Theader } from '@unity/components';
import { LogType, TableHeaders } from '@unity/types';

import useUserLogs from '@/Hooks/useUserLogs';

import LogRow from './LogRow';

const headerList: TableHeaders = [
  {
    label: 'Timestamp',
    property: 'timestamp',
    width: '32',
  },
  {
    label: 'Log',
    property: 'log',
    width: 'auto',
  },
];

const UserLogs = () => {
  const { data: userLogs = [] } = useUserLogs();

  return (
    <div data-component="UsersTable" className="mt-8">
      <Table>
        <>
          <Theader headerList={headerList} />
          <ul className="px-1">
            {userLogs.map((log: LogType, index) => (
              <LogRow key={`LogRow-row-${log.timestamp}-${index}`} index={index} log={log} headerList={headerList} />
            ))}
          </ul>
        </>
      </Table>
    </div>
  );
};

export default UserLogs;
