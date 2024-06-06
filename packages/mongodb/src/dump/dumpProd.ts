/* eslint-disable no-console */
import { spawn } from 'child_process';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const dumpFunc = async (username: string, password: string) => {
  const { MONGODB_CLUSTER_DOMAIN_ID = '' } = (await import('@unity/node-scripts/src/utils/envVariables.js')).default();

  const command = 'mongodump';
  const args = [
    `--uri=mongodb+srv://${username}:${password}@unitycluster.${MONGODB_CLUSTER_DOMAIN_ID}.mongodb.net/`,
    '--out=../../dump/production',
  ];

  const mongodumpProcess = spawn(command, args);

  console.log(JSON.stringify(mongodumpProcess, null, 2));

  mongodumpProcess.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  mongodumpProcess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  mongodumpProcess.on('close', () => {
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
  });
};

const aboutFunc = () => {
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
};

const askQuestion = (query: string) =>
  new Promise<string>((resolve) => {
    rl.question(query, (answer: string) => {
      resolve(answer);
    });
  });

const run = async () => {
  const answer = await askQuestion(
    'Are you sure you want to continue? You are about to replace your dump/local. (y/n) '
  );
  if (answer === 'y' || answer === 'Y') {
    const username = await askQuestion('Please enter your username: ');
    const password = await askQuestion('Please enter your password: ');
    await dumpFunc(username, password);
  } else {
    await aboutFunc();
  }
  rl.close();
};

run();
