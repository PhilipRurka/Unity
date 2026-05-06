import { buildMyWikiVectorIndex } from '../../internalTools';
import inngest from '../inngest';

const taskBuildMyWikiVectorIndex = inngest.createFunction(
  { id: 'process-update-myWiki', triggers: { event: 'task.buildMyWikiVectorIndex' } },
  async ({ step, logger }) => {
    step.run('log-start', () => console.log('Inngest ++++++++++ Received task to build MyWiki vector index'));
    await buildMyWikiVectorIndex(step, logger);
  }
);

export default taskBuildMyWikiVectorIndex;
