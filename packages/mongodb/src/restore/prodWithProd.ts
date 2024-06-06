#!/usr/bin/env node

/* eslint-disable no-console */
import chalk from 'chalk';
import { execSync } from 'child_process';
import inquirer from 'inquirer';
import readline from 'readline';

const { red, green, bold } = chalk;

const displaySuccessArt = () => {
  console.log('');
  console.log('');
  console.log('██████╗░██████╗░░█████╗░██████╗░░░░░░░░░░░░░░░██╗░░░░░██████╗░██████╗░░█████╗░██████╗░');
  console.log('██╔══██╗██╔══██╗██╔══██╗██╔══██╗░░░░░░░░░░░░░░╚██╗░░░░██╔══██╗██╔══██╗██╔══██╗██╔══██╗');
  console.log('██████╔╝██████╔╝██║░░██║██║░░██║░░█████╗█████╗░╚██╗░░░██████╔╝██████╔╝██║░░██║██║░░██║');
  console.log('██╔═══╝░██╔══██╗██║░░██║██║░░██║░░╚════╝╚════╝░██╔╝░░░██╔═══╝░██╔══██╗██║░░██║██║░░██║');
  console.log('██║░░░░░██║░░██║╚█████╔╝██████╔╝░░░░░░░░░░░░░░██╔╝░░░░██║░░░░░██║░░██║╚█████╔╝██████╔╝');
  console.log('╚═╝░░░░░╚═╝░░╚═╝░╚════╝░╚═════╝░░░░░░░░░░░░░░╚═╝░░░░░╚═╝░░░░░╚═╝░░╚═╝░╚════╝░╚═════╝░');
  console.log('');
  console.log('');
};

const displayAbortArt = () => {
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
  process.exit(1);
};

const restoreDatabase = async (username: string, password: string) => {
  const { MONGODB_CLUSTER_DOMAIN_ID = '' } = (await import('@unity/node-scripts/dist/utils/envVariables.js')).default();

  try {
    console.log('Dropping the Production database...');
    execSync(
      `mongosh "mongodb+srv://${username}:${password}@cluster0.${MONGODB_CLUSTER_DOMAIN_ID}.mongodb.net/" --eval "db.getSiblingDB('Production').dropDatabase()"`,
      { stdio: 'inherit' }
    );

    console.log('Database dropped successfully.');
    execSync(
      `mongorestore --uri="mongodb+srv://${username}:${password}@cluster0.${MONGODB_CLUSTER_DOMAIN_ID}.mongodb.net/" --drop dump/production`,
      { stdio: 'inherit' }
    );

    displaySuccessArt();
  } catch (error) {
    console.error('Error: Failed to drop or restore the database.', error);
    process.exit(1);
  }
};

const question = (query: string): Promise<string> => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(query, (answer: string) => {
      rl.close();
      resolve(answer);
    });
  });
};

const run = async () => {
  console.log(
    `Are you sure, this can't be un-done? If you want to proceed with restoring Production with Production dump, ${red(
      'WITHOUT COPY PASTING'
    )}, input the following:`
  );
  console.log(`${green('Restore Prod with Prod Dump')}`);

  const input = await question(`${bold('Input here:')}`);

  if (input === 'Restore Prod with Prod Dump') {
    const username = await question('Please enter your username: ');
    const { password } = await inquirer.prompt({
      type: 'password',
      name: 'password',
      message: 'Please enter your MongoDB password: ',
      mask: '*',
    });

    await restoreDatabase(username, password);
  } else {
    displayAbortArt();
  }
};

run();
