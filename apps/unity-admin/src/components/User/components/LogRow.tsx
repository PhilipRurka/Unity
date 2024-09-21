import clsx from 'clsx';
import { formatDate } from 'src/utils';

import { Table } from '@unity/components';
import { LogType, UserStatus } from '@unity/types';

type LogRowProps = {
  log: LogType;
  index: number;
};

const LogRow = ({ log, index }: LogRowProps) => {
  const statusColor = (status: UserStatus) => {
    if (status === 'active') return 'text-green-500';
    if (status === 'pending') return 'text-orange-500';
    if (status === 'disabled') return 'text-red-500';

    return '';
  };

  return (
    <div data-component="LogRow">
      <Table.Row>
        <Table.Data>
          <p className="text-sm">{formatDate(log.timestamp)}</p>
        </Table.Data>
        <Table.Data>
          <>
            {log.type === 'activeSession' && (
              <div>
                <p className="text-sm text-blue-800">New active session</p>
                <p className="text-sm">User has been active today.</p>
              </div>
            )}
            {log.type === 'inviteSent' && (
              <div>
                <p className="text-md font-bold">Invitation sent</p>
                <p className="text-sm">
                  They new account is now <span className={clsx('inline', statusColor('pending'))}>pending</span>.
                </p>
              </div>
            )}
            {log.type === 'statusChange' && (
              <div>
                <p className="text-md font-bold">Status change</p>
                <p className="text-sm">
                  From <span className={clsx('inline', statusColor(log.from))}>{log.from}</span> to{' '}
                  <span className={clsx('inline', statusColor(log.to))}>{log.to}</span>
                </p>
                {log.reason && (
                  <p className="text-md font-bold">
                    <span className="inline">Reason:</span>
                    {` ${log.reason}`}
                  </p>
                )}
              </div>
            )}
            {log.type === 'updatedField' && (
              <div>
                {log.fields.map((field, iIndex) => (
                  <div key={`LogRow-${index}-${iIndex}`}>
                    <p className="text-md font-bold">User Details was edited</p>
                    <p className="mb-2 text-sm font-bold">{field.property}</p>
                    <div className="flex border border-dashed border-black">
                      <div className="w-1/2 p-3">
                        <p className="mb-1 text-sm underline">From</p>
                        <p className="text-sm">{field.from}</p>
                      </div>
                      <div className="w-1/2 border-l border-dashed border-black p-3">
                        <p className="mb-1 text-sm underline">To</p>
                        <p className="text-sm">{field.to}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        </Table.Data>
      </Table.Row>
    </div>
  );
};

export default LogRow;
