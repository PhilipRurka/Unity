import { serve } from 'inngest/next';

import { buildMyWikiVectorIndex, inngest } from '@unity/api-methods';

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [buildMyWikiVectorIndex],
});
