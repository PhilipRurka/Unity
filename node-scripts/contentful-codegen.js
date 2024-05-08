/* eslint-disable import/no-extraneous-dependencies */

/* eslint-disable no-console */
import { spawn } from 'child_process';
import { Spinner } from 'cli-spinner';
import { access, constants, readdir, unlink, writeFile } from 'fs/promises';

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
  const { CONTENTFUL_SPACE_ID, CONTENTFUL_CMA_TOKEN } = (await import('./env-variables.js')).default();

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
    try {
      await access('@types/contentful-codegen/SimplerContentfulTypes.ts', constants.F_OK);
      await unlink('@types/contentful-codegen/SimplerContentfulTypes.ts');
      console.log('Step 1: SimplerContentfulTypes.ts has been deleted');
    } catch (_) {
      console.log('Step 1: SimplerContentfulTypes.ts was not deleted, because it never existed');
    }

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
    await writeFile('@types/contentful-codegen/SimplerContentfulTypes.ts', content);
    spinner.stop(true);

    console.log('');
    console.log('Step 5: SimplerContentfulTypes.ts has been re-created and updated');

    console.log('');
    console.log('Done, happy coding');

    console.log('');
  } catch (error) {
    console.error(`An error occurred: ${error.message}`);
  }
};

runCommands();
