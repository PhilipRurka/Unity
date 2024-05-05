/* eslint-disable import/no-extraneous-dependencies */

/* eslint-disable no-console */
import { spawn } from 'child_process';
import { Spinner } from 'cli-spinner';
import { readdir, unlink, writeFile } from 'fs/promises';

const execCommand = async (command, args) =>
  new Promise((resolve, reject) => {
    const process = spawn(command, args);

    process.stdout.on('data', (data) => {
      const output = data.toString().replace(/\[\d{2}:\d{2}:\d{2}\]\s/g, '');
      console.log(output);
    });

    process.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });

    process.on('close', (code) => {
      if (code === 0) {
        resolve(code);
      } else {
        reject(new Error(`Command exited with code ${code}`));
      }
    });
  });

const runCommands = async () => {
  const { CONTENTFUL_SPACE_ID, CONTENTFUL_CMA_TOKEN } = (await import('./envVariables.js')).default();

  const spinner = new Spinner('Please hold.. %s');
  spinner.setSpinnerString('|/-\\');

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

  try {
    await unlink('@types/contentful-codegen/AllContentModels.ts');
    console.log('Step 1: AllContentModels.ts has been deleted');

    await execCommand(importContentModels.command, importContentModels.args);
    console.log("Step 2: TemporaryContentModelStructure.json created and populated with Contentful's content models");

    spinner.start();
    await execCommand(exportGeneratedTypes.command, exportGeneratedTypes.args);
    spinner.stop(true);
    console.log('');
    console.log(
      'Step 3: The types have successfully been generated and are stored in the following directory "@types/contentful-codegen"'
    );

    await unlink('lib/TemporaryContentModelStructure.json');
    console.log('');
    console.log('Step 4: TemporaryContentModelStructure.json has been deleted');

    spinner.start();
    const files = await readdir('@types/contentful-codegen');
    const typeNames = files
      .filter((file) => file.endsWith('.ts') && file !== 'index.ts')
      .map((file) => file.replace('Type', '').replace('.ts', ''))
      .map((name) => `'${name.charAt(0).toLowerCase() + name.slice(1)}'`);
    const typeUnion = `export type AllContentModels = ${typeNames.join(' | ')};`;
    await writeFile('@types/contentful-codegen/AllContentModels.ts', typeUnion);
    spinner.stop(true);
    console.log('');
    console.log('Step 5: AllContentModels.ts has been re-created and updated');

    console.log('');
    console.log('Done, happy coding');

    console.log('');
  } catch (error) {
    console.error(`An error occurred: ${error.message}`);
  }
};

runCommands();
