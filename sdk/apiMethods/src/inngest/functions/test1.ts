import inngest from '../inngest';

const test1 = inngest.createFunction(
  { id: 'test-function', triggers: [{ event: 'test/event' }] },
  async ({ event }: { event: any }) => {
    console.log('Received:', event);
  }
);

export default test1;
