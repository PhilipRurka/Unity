/* eslint-disable no-console */
import { spawn } from 'child_process';

const executeCommand = async (command: string, args: string[]) =>
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

export default executeCommand;
