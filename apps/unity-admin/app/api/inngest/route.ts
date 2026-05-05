import { serve } from 'inngest/next';

import { inngest, taskBuildMyWikiVectorIndex } from '@unity/api-methods';

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [taskBuildMyWikiVectorIndex],
});
