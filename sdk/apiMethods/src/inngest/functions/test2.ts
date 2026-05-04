import inngest from '../inngest';

const test2 = inngest.createFunction(
  { id: 'process-task', triggers: { event: 'app/task.created' } },
  async ({ event, step }) => {
    const result = await step.run('handle-task', async () => ({ processed: true, id: event.data.id }));

    await step.sleep('pause', '1s');

    return { message: `Task ${event.data.id} complete`, result };
  }
);

export default test2;
