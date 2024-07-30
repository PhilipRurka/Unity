/* eslint-disable no-console */
import { spawn } from 'child_process';
import inquirer from 'inquirer';
import readline from 'readline';

import { red } from '@unity/node-scripts/dist/utils/colorCodedLogs.js';

const dumpFunc = async (username: string, password: string) => {
  const { MONGODB_CLUSTER_DOMAIN_ID = '' } = (await import('@unity/node-scripts/dist/utils/envVariables.js')).default();

  const command = 'mongodump';
  const args = [
    `--uri=mongodb+srv://${username}:${password}@unitycluster.${MONGODB_CLUSTER_DOMAIN_ID}.mongodb.net/`,
    '--out=dump/production',
  ];

  const mongodumpProcess = spawn(command, args);

  mongodumpProcess.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  mongodumpProcess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  mongodumpProcess.on('close', (processCode) => {
    if (processCode === 1) {
      console.log('');
      console.log(red, 'Invalid Credentials!!');
      console.log('');
    } else {
      console.log('');
      console.log('');
      console.log('┏━━━┓╋╋╋╋╋╋╋╋╋┏━━━┓╋╋╋╋╋╋┏┓');
      console.log('┗┓┏┓┃╋╋╋╋╋╋╋╋╋┃┏━┓┃╋╋╋╋╋╋┃┃');
      console.log('╋┃┃┃┣┓┏┳┓┏┳━━┓┃┗━┛┣━┳━━┳━┛┃');
      console.log('╋┃┃┃┃┃┃┃┗┛┃┏┓┃┃┏━━┫┏┫┏┓┃┏┓┃');
      console.log('┏┛┗┛┃┗┛┃┃┃┃┗┛┃┃┃╋╋┃┃┃┗┛┃┗┛┃');
      console.log('┗━━━┻━━┻┻┻┫┏━┛┗┛╋╋┗┛┗━━┻━━┛');
      console.log('╋╋╋╋╋╋╋╋╋╋┃┃');
      console.log('╋╋╋╋╋╋╋╋╋╋┗┛');
      console.log('');
      console.log('');
    }

    process.exit();
  });
};

const abortFunc = () => {
  console.log('');
  console.log('');
  console.log('░█████╗░██████╗░░█████╗░██████╗░████████╗');
  console.log('██╔══██╗██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝');
  console.log('███████║██████╦╝██║░░██║██████╔╝░░░██║░░░');
  console.log('██╔══██║██╔══██╗██║░░██║██╔══██╗░░░██║░░░');
  console.log('██║░░██║██████╦╝╚█████╔╝██║░░██║░░░██║░░░');
  console.log('╚═╝░░╚═╝╚═════╝░░╚════╝░╚═╝░░╚═╝░░░╚═╝░░░');
  console.log('');
  console.log('');

  process.exit();
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (query: string): Promise<string> =>
  new Promise((resolve) => {
    rl.question(query, (answer: string) => {
      resolve(answer);
    });
  });

const run = async () => {
  const answer = await question(
    'Are you sure you want to continue? You are abort to replace your dump/production. (y/n) '
  );
  if (answer === 'y' || answer === 'Y') {
    const username = await question('Please enter your username: ');
    const { password } = await inquirer.prompt({
      type: 'password',
      name: 'password',
      message: 'Please enter your password: ',
      mask: '*',
    });
    await dumpFunc(username, password);
  } else {
    abortFunc();
  }
};

run();
