import { serve } from 'inngest/next';

import { inngest, test1, test2 } from '@unity/api-methods';

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [test1, test2],
});
