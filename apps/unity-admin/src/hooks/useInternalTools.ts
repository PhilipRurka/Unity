import useSWR from 'swr';

import { AuditFrontendType } from '@unity/types';

import getInternalTools from '@/Fetchers/getInternalTools';

const useInternalTools = () => {
  const response = useSWR<AuditFrontendType>('internal-tools', () => getInternalTools());

  return response;
};

export default useInternalTools;
