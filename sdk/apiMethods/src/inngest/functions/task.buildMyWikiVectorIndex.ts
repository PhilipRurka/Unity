import { buildMyWikiVectorIndex } from '../../internalTools';
import inngest from '../inngest';

const taskBuildMyWikiVectorIndex = inngest.createFunction(
  { id: 'process-update-myWiki', triggers: { event: 'task.buildMyWikiVectorIndex' } },
  async () => {
    console.log('Received task to build MyWiki vector index');
    await buildMyWikiVectorIndex();
  }
);

export default taskBuildMyWikiVectorIndex;
