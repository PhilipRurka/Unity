/* eslint-disable import/no-extraneous-dependencies */

/* eslint-disable no-console */
import { readdir, unlink, writeFile } from 'fs/promises';

import execCommand from './executeCommand.js';
import executeStep from './executeStep.js';
import runPrettier from './runPrettier.js';

const createTypesFile = async () => {
  const filePath = '@types/contentful-codegen/SimplerContentfulTypes.ts';

  try {
    await unlink(filePath);
    // eslint-disable-next-line no-empty
  } catch (_) {}

  const files = await readdir('@types/contentful-codegen');
  const imports = [];
  const types = [];
  files.forEach((file) => {
    if (file.endsWith('.ts') && file !== 'index.ts') {
      const typeName = file.replace('Type', '').replace('.ts', '');
      const importPath = `./${file.replace('.ts', '')}`;
      const typeWithoutLinks = `Type${typeName}WithoutUnresolvableLinksResponse`;
      imports.push(`import { ${typeWithoutLinks} } from "${importPath}";`);
      types.push(`export type ${typeName}Type = ${typeWithoutLinks}`);
    }
  });

  const typeNames = files
    .filter((file) => file.endsWith('.ts') && file !== 'index.ts')
    .map((file) => file.replace('Type', '').replace('.ts', ''))
    .map((name) => `'${name.charAt(0).toLowerCase() + name.slice(1)}'`);
  const typeUnion = `export type AllContentModelTypes = ${typeNames.join(' | ')};`;
  const content = [...imports, '', typeUnion, '', ...types].join('\n');
  await writeFile(filePath, content);
  await runPrettier(filePath);
};

const runCommands = async () => {
  const { CONTENTFUL_SPACE_ID, CONTENTFUL_CMA_TOKEN } = (await import('./env-variables.js')).default();

  const importContentModels = {
    command: 'contentful',
    args: [
      'space',
      'export',
      '--space-id',
      CONTENTFUL_SPACE_ID,
      '--management-token',
      CONTENTFUL_CMA_TOKEN,
      '--export-dir',
      'lib',
      '--content-file',
      'TemporaryContentModelStructure.json',
    ],
  };

  const exportGeneratedTypes = {
    command: './node_modules/.bin/cf-content-types-generator',
    args: ['lib/TemporaryContentModelStructure.json', '-o', '@types/contentful-codegen', '-X', '-g', '-r'],
  };

  await executeStep(
    "Step 1: TemporaryContentModelStructure.json created and populated with Contentful's content models",
    () => execCommand(importContentModels.command, importContentModels.args),
    { disableSpinner: true }
  );

  await executeStep(
    'Step 2: The types have successfully been generated and are stored in the following directory "@types/contentful-codegen"',
    () => execCommand(exportGeneratedTypes.command, exportGeneratedTypes.args)
  );

  await executeStep('Step 3: TemporaryContentModelStructure.json has been deleted', () =>
    unlink('lib/TemporaryContentModelStructure.json')
  );

  await executeStep('Step 4: SimplerContentfulTypes.ts has been deleted and re-created', () => createTypesFile());

  console.log('');
  console.log('Done, happy coding');
  console.log('');
};

runCommands();
