/* eslint-disable no-console */
import { unlink } from 'fs/promises';

import changeDirAndExecuteCommand from '../utils/changeDirAndExecuteCommand.js';
import executeCommand from '../utils/executeCommand.js';
import executeStep from '../utils/executeStep.js';
import createTypesFile from './createTypesFile.js';

const runCommands = async () => {
  const { CONTENTFUL_SPACE_ID, CONTENTFUL_CMA_TOKEN } = (await import('../utils/envVariables.js')).default();

  const importContentModels = {
    command: 'contentful',
    args: [
      'space',
      'export',
      '--space-id',
      CONTENTFUL_SPACE_ID || '',
      '--management-token',
      CONTENTFUL_CMA_TOKEN || '',
      '--export-dir',
      './dist/contentfulCodegen',
      '--content-file',
      'TemporaryContentModelStructure.json',
    ],
  };

  const exportGeneratedTypes = {
    command: './node_modules/.bin/cf-content-types-generator',
    args: [
      'dist/contentfulCodegen/TemporaryContentModelStructure.json',
      '-o',
      '../../sdk/types/src/contentful-codegen',
      '-X',
      '-g',
      '-r',
    ],
  };

  await executeStep(
    "Step 1: TemporaryContentModelStructure.json created and populated with Contentful's content models",
    () => executeCommand(importContentModels.command, importContentModels.args),
    { disableSpinner: true }
  );

  await executeStep(
    'Step 2: The types have successfully been generated and are stored in the following directory "node-scripts"',
    () => executeCommand(exportGeneratedTypes.command, exportGeneratedTypes.args)
  );

  await executeStep('Step 3: TemporaryContentModelStructure.json has been deleted', () =>
    unlink('dist/contentfulCodegen/TemporaryContentModelStructure.json')
  );

  await executeStep('Step 4: SimplerContentfulTypes.ts has been deleted and re-created', () => createTypesFile());

  await executeStep('Step 5: Run yarn build on @unity/types', () =>
    changeDirAndExecuteCommand('../../sdk/types', 'yarn', ['build'])
  );

  console.log('');
  console.log('Done, happy coding');
  console.log('');
};

runCommands();
