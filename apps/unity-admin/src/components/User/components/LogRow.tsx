import clsx from 'clsx';
import { formatDate } from 'src/utils';

import { Tdata, Trow } from '@unity/components';
import { LogType, TableHeaders, UserStatus } from '@unity/types';

type LogRowProps = {
  log: LogType;
  headerList: TableHeaders;
  index: number;
};

const LogRow = ({ log, headerList, index }: LogRowProps) => {
  const statusColor = (status: UserStatus) => {
    if (status === 'active') return 'text-green-500';
    if (status === 'pending') return 'text-orange-500';
    if (status === 'disabled') return 'text-red-500';

    return '';
  };

  return (
    <div data-component="LogRow">
      <Trow>
        <Tdata width={headerList[0].width} className="shrink-0">
          <p className="text-sm">{formatDate(log.timestamp)}</p>
        </Tdata>
        <Tdata width={headerList[1].width}>
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
        </Tdata>
      </Trow>
    </div>
  );
};

export default LogRow;
