import { fileURLToPath } from 'url';
import path from 'path';
import dotenv from 'dotenv';

const envVariables = () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const envPath = path.resolve(__dirname, '../.env.local');
  
  dotenv.config({ path: envPath });

  debugger
  
  const { CONTENTFUL_SPACE_ID, CONTENTFUL_CMA_TOKEN } = process.env;

  return { CONTENTFUL_SPACE_ID, CONTENTFUL_CMA_TOKEN }
}

export default envVariables