import { spawn } from 'child_process';
import { unlink } from 'fs/promises';
import { Spinner } from 'cli-spinner'

const execCommand = async (command, args) => new Promise((resolve, reject) => {
	const process = spawn(command, args);

	process.stdout.on('data', (data) => {
			console.log(data.toString());
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
	const { CONTENTFUL_SPACE_ID, CONTENTFUL_CMA_TOKEN } = (await import('./envVariables.js')).default()

	const spinner = new Spinner('Please hold.. %s');
	spinner.setSpinnerString('|/-\\');

	const importContentModels = {
		command: 'contentful',
		args: [
			'space',
			'export',
			'--space-id', CONTENTFUL_SPACE_ID,
			'--management-token', CONTENTFUL_CMA_TOKEN,
			'--export-dir', 'lib',
			'--content-file', 'TemporaryContentModelStructure.json'
		]
	}
	
	const exportGeneratedTypes = {
		command: './node_modules/.bin/cf-content-types-generator',
		args: [
			'lib/TemporaryContentModelStructure.json',
			'-o', '@type/contentful'
		]
	}

	try {
		await execCommand(importContentModels.command, importContentModels.args);
		console.log('Step 1: TemporaryContentModelStructure.json created and populated with Contentful\'s content models');

		spinner.start();
		await execCommand(exportGeneratedTypes.command, exportGeneratedTypes.args);
		spinner.stop(true);
		console.log('');
		console.log('Step 2: The types have successfully been generated and are stored in the following directory "@types/contentful"');

		await unlink('lib/TemporaryContentModelStructure.json')
		console.log('');
		console.log('Step 3: TemporaryContentModelStructure.json has been deleted')

		console.log('');
		console.log('Done, happy coding');

		console.log('');

	} catch (error) {
		console.error(`An error occurred: ${error.message}`);
	}
};

runCommands();
