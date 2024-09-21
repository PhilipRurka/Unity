import { Table } from '@unity/components';
import { LogType } from '@unity/types';

import useUserLogs from '@/Hooks/useUserLogs';

import LogRow from './LogRow';

const UserLogs = () => {
  const { data: userLogs = [] } = useUserLogs();

  return (
    <div data-component="UsersTable" className="mt-8">
      <Table gridCols="grid-cols-user-logs">
        <Table.Header>
          <Table.Heading>Timestamp</Table.Heading>
          <Table.Heading>Log</Table.Heading>
        </Table.Header>
        <Table.Content>
          <>
            {userLogs.map((log: LogType, index) => (
              <LogRow key={`LogRow-row-${log.timestamp}-${index}`} index={index} log={log} />
            ))}
          </>
        </Table.Content>
      </Table>
    </div>
  );
};

export default UserLogs;
