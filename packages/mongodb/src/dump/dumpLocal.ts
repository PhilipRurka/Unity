/* eslint-disable no-console */
import { spawn } from 'child_process';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const dumpFunc = async (answer: string) => {
  if (answer === 'y' || answer === 'Y') {
    const command = 'mongodump';
    const args = ['--uri=mongodb://localhost:27017', '--out=dump/local'];

    const mongodumpProcess = spawn(command, args);

    mongodumpProcess.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });

    mongodumpProcess.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });

    mongodumpProcess.on('close', () => {
      console.log('');
      console.log('');
      console.log('┏━━━┓╋╋╋╋╋╋╋╋╋┏┓╋╋╋╋╋╋╋╋╋╋╋┏┓');
      console.log('┗┓┏┓┃╋╋╋╋╋╋╋╋╋┃┃╋╋╋╋╋╋╋╋╋╋╋┃┃');
      console.log('╋┃┃┃┣┓┏┳┓┏┳━━┓┃┃╋╋┏━━┳━━┳━━┫┃');
      console.log('╋┃┃┃┃┃┃┃┗┛┃┏┓┃┃┃╋┏┫┏┓┃┏━┫┏┓┃┃');
      console.log('┏┛┗┛┃┗┛┃┃┃┃┗┛┃┃┗━┛┃┗┛┃┗━┫┏┓┃┗┓');
      console.log('┗━━━┻━━┻┻┻┫┏━┛┗━━━┻━━┻━━┻┛┗┻━┛');
      console.log('╋╋╋╋╋╋╋╋╋╋┃┃');
      console.log('╋╋╋╋╋╋╋╋╋╋┗┛');
      console.log('');
      console.log('');
    });
  } else {
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
  }
};

rl.question('Are you sure you want to continue? You are about to replace your dump/local. (y/n) ', (answer) => {
  dumpFunc(answer).then(() => {
    rl.close();
  });
});
