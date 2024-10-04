'use client';

import { useState } from 'react';
import { formatDate } from 'src/utils';
import { mutate } from 'swr';

import { Button } from '@unity/components';
import { AuditOptions } from '@unity/types';

import updateInternalTools from '@/Fetchers/updateInternalTools';
import useContentModel from '@/Hooks/useContentModel';
import useInternalTools from '@/Hooks/useInternalTools';

const InternalTools = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { data: internalTools } = useInternalTools();
  const { data: captainsLog } = useContentModel('captainsLog');

  if (!internalTools || !captainsLog) return <></>;

  const handleUpdateInternalTools = async (option: AuditOptions) => {
    setIsLoading(true);
    await updateInternalTools(option);

    mutate(`internal-tools`);
    setIsLoading(false);
  };

  const lastAlgoliaDate = internalTools.lastAlgoliaUpdate ? formatDate(internalTools.lastAlgoliaUpdate) : '';
  const lastLinkPlacementDate = internalTools.lastLinkPlacementUpdate
    ? formatDate(internalTools.lastLinkPlacementUpdate)
    : '';
  const lastIncompleteDate = internalTools.lastIncompleteUpdate ? formatDate(internalTools.lastIncompleteUpdate) : '';

  console.log(captainsLog);

  return (
    <div data-component="InternalTools">
      <h1 className="my-9 text-4xl">Internal InternalTools</h1>
      <div className="flex flex-col gap-16">
        <div>
          <div className="mb-3">
            <h2 className="my-9 inline text-2xl">All</h2>
          </div>
          <Button
            color="black"
            size="small"
            isFull
            onClick={() => handleUpdateInternalTools('all')}
            disabled={isLoading}
          >
            Update
          </Button>
        </div>

        <div>
          <div className="mb-3">
            <h2 className="my-9 inline text-2xl">Algolia</h2>
            <span className="inline text-xs italic"> - Last updated: {lastAlgoliaDate} </span>
          </div>
          <Button
            color="black"
            size="small"
            isFull
            onClick={() => handleUpdateInternalTools('algolia')}
            disabled={isLoading}
          >
            Update
          </Button>
        </div>

        <div>
          <div className="mb-3">
            <h2 className="my-9 inline text-2xl">Link Placement</h2>
            <span className="inline text-xs italic"> - Last updated: {lastLinkPlacementDate}</span>
          </div>
          <Button
            color="black"
            size="small"
            isFull
            onClick={() => handleUpdateInternalTools('link placement')}
            disabled={isLoading}
          >
            Update
          </Button>

          <div></div>
        </div>

        <div>
          <div className="mb-3">
            <h2 className="my-9 inline text-2xl">Incomplete</h2>
            <span className="inline text-xs italic"> - Last updated: {lastIncompleteDate}</span>
          </div>

          <Button
            color="black"
            size="small"
            isFull
            onClick={() => handleUpdateInternalTools('incomplete')}
            disabled={isLoading}
          >
            Update
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InternalTools;
