import useSWR from 'swr';

import { AllContentModelTypes, ContentModelMapping } from '@unity/types';

import getContentModel from '@/Fetchers/getContentModel';

export type UseContentModel = <T extends AllContentModelTypes>(
  type: T
) => ReturnType<typeof useSWR<Array<ContentModelMapping[T]>>>;

const useContentModel: UseContentModel = <T extends AllContentModelTypes>(type: T) => {
  const response = useSWR<Array<ContentModelMapping[T]>>(`content-model-${type}`, () => getContentModel<T>(type));

  return response;
};

export default useContentModel;
