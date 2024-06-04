/* eslint-disable no-console */
import { exec } from 'child_process';

const runPrettier = (filePath: string) =>
  new Promise((resolve, reject) => {
    exec(`npx prettier --write "${filePath}"`, (error, stdout, stderr) => {
      if (error) {
        console.error('Error running Prettier:', stderr);
        reject(stderr);
      } else {
        resolve(stdout);
      }
    });
  });

export default runPrettier;
