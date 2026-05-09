import { Inngest } from 'inngest';
import type { GetStepTools, Logger } from 'inngest';

type Step = GetStepTools<typeof inngest>;

export type InngestType = {
  step: Step;
  logger: Logger;
};

const inngest = new Inngest({
  id: 'unity-admin',
});

export default inngest;
