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
                <p className="text-sm">New active session</p>
                <p className="text-sm">User has been active today.</p>
              </div>
            )}
            {log.type === 'inviteSent' && (
              <div>
                <p className="text-sm">Invitation sent</p>
                <p className="text-sm">An invitation was sent to the user.</p>
              </div>
            )}
            {log.type === 'statusChange' && (
              <div>
                <p className="text-sm">
                  Status change from <span className={clsx('inline', statusColor(log.from))}>{log.from}</span> to{' '}
                  <span className={clsx('inline', statusColor(log.to))}>{log.to}</span>
                </p>
                {log.reason && (
                  <p className="text-sm">
                    <span className="inline">Reason:</span>
                    {` ${log.reason}`}
                  </p>
                )}
              </div>
            )}
            {log.type === 'userUpdated' && (
              <div>
                {log.updatedProperties.map((updatedProperty, iIndex) => (
                  <p key={`LogRow-${index}-${iIndex}`} className="text-sm">
                    {updatedProperty}
                  </p>
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
