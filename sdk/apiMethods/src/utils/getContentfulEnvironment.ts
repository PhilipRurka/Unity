import { Environment, createClient } from 'contentful-management';

const getContentfulEnvironment = async (): Promise<Environment> => {
  const managementClient = createClient({
    accessToken: process.env.CONTENTFUL_CMA_TOKEN || '',
  });

  const space = await managementClient.getSpace(process.env.CONTENTFUL_SPACE_ID || '');
  const environment = await space.getEnvironment('master');

  return environment;
};

export default getContentfulEnvironment;
