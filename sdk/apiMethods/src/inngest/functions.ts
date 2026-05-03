import client from './client';

const functions = [
  client.createFunction(
    { id: 'test-function', triggers: [{ event: 'test/event' }] },
    async ({ event }: { event: any }) => {
      console.log('Received:', event);
    }
  ),
];

export default functions;
