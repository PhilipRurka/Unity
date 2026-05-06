import { buildMyWikiVectorIndex } from '../../internalTools';
import inngest from '../inngest';

const taskBuildMyWikiVectorIndex = inngest.createFunction(
  { id: 'process-update-myWiki', triggers: { event: 'task.buildMyWikiVectorIndex' } },
  async ({ step }) => {
    step.run('log-start', () => console.log('Inngest ++++++++++ Received task to build MyWiki vector index'));
    await buildMyWikiVectorIndex(step);
  }
);

export default taskBuildMyWikiVectorIndex;
