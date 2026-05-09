import { buildMyWikiVectorIndex } from '../../internalTools';
import inngestLib from '../inngest';

const taskBuildMyWikiVectorIndex = inngestLib.createFunction(
  { id: 'process-update-myWiki', triggers: { event: 'task.buildMyWikiVectorIndex' } },
  async ({ step, logger }) => {
    step.run('log-start', () => console.log('Inngest ++++++++++ Received task to build MyWiki vector index'));

    const inngest = { step, logger };

    await buildMyWikiVectorIndex(inngest);
  }
);

export default taskBuildMyWikiVectorIndex;
