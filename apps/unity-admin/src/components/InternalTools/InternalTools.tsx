'use client';

import { useRef, useState } from 'react';
import { formatDate } from 'src/utils';
import { mutate } from 'swr';

import { Button, Markdown } from '@unity/components';
import { AuditOptions, TransformedToRichTextData } from '@unity/types';

import updateInternalTools from '@/Fetchers/updateInternalTools';
import updateKeywordLinkArticle from '@/Fetchers/updateKeywordLinkArticle';
import updateKeywordLinkInternalTools from '@/Fetchers/updateKeywordLinkInternalTools';
import useContentModel from '@/Hooks/useContentModel';
import useInternalTools from '@/Hooks/useInternalTools';

type DisplayUpdatingPercentage = 'linkPlacement' | null;

const InternalTools = () => {
  const percentageFractionRef = useRef(0);

  const [isLoading, setIsLoading] = useState(false);
  const [displayUpdatingPercentage, setDisplayUpdatingPercentage] = useState<DisplayUpdatingPercentage>(null);
  const [amountUpdatingPercentage, setAmountUpdatingPercentage] = useState(0);

  const { data: internalTools } = useInternalTools();
  const { data: captainsLogArray } = useContentModel('captainsLog');

  if (!internalTools || !captainsLogArray) return <></>;

  const [captainsLog] = captainsLogArray;

  const processItemsRecursively = async (items: TransformedToRichTextData[], index = 0) => {
    if (index >= items.length) return;

    await updateKeywordLinkArticle({ article: items[index] });

    let percentage = Math.round(percentageFractionRef.current) * (index + 1);
    percentage = percentage > 100 ? 100 : percentage;

    setAmountUpdatingPercentage(percentage);

    await processItemsRecursively(items, index + 1);
  };

  const handleUpdateInternalTools = async (option: AuditOptions) => {
    setIsLoading(true);
    const result = await updateInternalTools(option);

    if (Array.isArray(result)) {
      percentageFractionRef.current = 100 / result.length;
      setDisplayUpdatingPercentage('linkPlacement');

      await processItemsRecursively(result);

      await updateKeywordLinkInternalTools();

      setDisplayUpdatingPercentage(null);
      setAmountUpdatingPercentage(0);
    }

    mutate(`internal-tools`);
    setIsLoading(false);
  };

  const lastAlgoliaDate = internalTools.lastAlgoliaUpdate ? formatDate(internalTools.lastAlgoliaUpdate) : '';
  const lastLinkPlacementDate = internalTools.lastLinkPlacementUpdate
    ? formatDate(internalTools.lastLinkPlacementUpdate)
    : '';
  const lastIncompleteDate = internalTools.lastIncompleteUpdate ? formatDate(internalTools.lastIncompleteUpdate) : '';
  const hierarchyDate = internalTools.hierarchyLinks ? formatDate(internalTools.hierarchyLinks) : '';

  return (
    <div data-component="InternalTools">
      <h1 className="my-9 text-4xl">Internal Tools</h1>
      <div className="flex flex-col gap-16">
        <div>
          <div className="mb-3">
            <h2 className="my-9 inline text-2xl font-bold">All</h2>
            <hr className="border-black" />
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
            <h2 className="my-9 inline text-2xl font-bold">Algolia</h2>
            <span className="inline text-xs italic"> - Last updated: {lastAlgoliaDate} </span>
            <hr className="border-black" />
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
            <h2 className="my-9 inline text-2xl font-bold">Hierarchy</h2>
            <span className="inline text-xs italic"> - Last updated: {hierarchyDate}</span>
            <hr className="border-black" />
          </div>

          <Button
            color="black"
            size="small"
            isFull
            onClick={() => handleUpdateInternalTools('hierarchy links')}
            disabled={isLoading}
          >
            Update
          </Button>
          <div>
            <Markdown content={captainsLog.fields.hierarchyLayoutCheck} />
          </div>
        </div>

        <div>
          <div className="mb-3">
            <h2 className="my-9 inline text-2xl font-bold">Link Placement</h2>
            <span className="inline text-xs italic"> - Last updated: {lastLinkPlacementDate}</span>
            <hr className="border-black" />
          </div>
          <Button
            color="black"
            size="small"
            isFull
            onClick={() => handleUpdateInternalTools('link placement')}
            disabled={isLoading}
          >
            {displayUpdatingPercentage === 'linkPlacement' ? `${amountUpdatingPercentage}%` : 'Update'}
          </Button>

          <div>
            <Markdown content={captainsLog.fields.keywordLinksCheckOverview} />
          </div>
        </div>

        <div>
          <div className="mb-3">
            <h2 className="my-9 inline text-2xl font-bold">Incomplete</h2>
            <span className="inline text-xs italic"> - Last updated: {lastIncompleteDate}</span>
            <hr className="border-black" />
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
          <div>
            <Markdown content={captainsLog.fields.incompleteUnderlinedItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternalTools;
