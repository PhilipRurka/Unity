import { serve } from 'inngest/next';

import { client, functions } from '@unity/api-methods';

export const { GET, POST, PUT } = serve({
  client,
  functions,
});
