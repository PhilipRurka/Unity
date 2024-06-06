#!/usr/bin/env node

/* eslint-disable no-console */
import { execSync } from 'child_process';
import readline from 'readline';

const askQuestion = (query: string): Promise<string> => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(query, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
};

const displayArt = (message: string) => {
  console.log('');
  console.log('');
  console.log(message);
  console.log('');
  console.log('');
};

// ASCII Art
const successArt = `
██╗░░░░░░█████╗░░█████╗░░█████╗░██╗░░░░░  ░░░░░░░░░░░░██╗░░  ██████╗░██████╗░░█████╗░██████╗░
██║░░░░░██╔══██╗██╔══██╗██╔══██╗██║░░░░░  ░░░░░░░░░░░░╚██╗░  ██╔══██╗██╔══██╗██╔══██╗██╔══██╗
██║░░░░░██║░░██║██║░░╚═╝███████║██║░░░░░  █████╗█████╗░╚██╗  ██████╔╝██████╔╝██║░░██║██║░░██║
██║░░░░░██║░░██║██║░░██╗██╔══██║██║░░░░░  ╚════╝╚════╝░██╔╝  ██╔═══╝░██╔══██╗██║░░██║██║░░██║
███████╗╚█████╔╝╚█████╔╝██║░░██║███████╗  ░░░░░░░░░░░░██╔╝░  ██║░░░░░██║░░██║╚█████╔╝██████╔╝
╚══════╝░╚════╝░░╚════╝░╚═╝░░╚═╝╚══════╝  ░░░░░░░░░░░░╚═╝░░  ╚═╝░░░░░╚═╝░░╚═╝░╚════╝░╚═════╝░
`;

const abortArt = `
░█████╗░██████╗░░█████╗░██████╗░████████╗
██╔══██╗██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝
███████║██████╦╝██║░░██║██████╔╝░░░██║░░░
██╔══██║██╔══██╗██║░░██║██╔══██╗░░░██║░░░
██║░░██║██████╦╝╚█████╔╝██║░░██║░░░██║░░░
╚═╝░░╚═╝╚═════╝░░╚════╝░╚═╝░░╚═╝░░░╚═╝░░░
`;

// Main function to execute the script
const run = async () => {
  const answer = await askQuestion('Are you sure you want to continue? You may lose local db progress. (y/n) ');
  if (answer.toLowerCase() === 'y') {
    try {
      execSync(`mongosh "mongodb://localhost:27017" --eval "db.getSiblingDB('Production').dropDatabase()"`);
      execSync('mongorestore --uri=mongodb://localhost:27017 --drop dump/production');

      displayArt(successArt);
    } catch (error) {
      console.error('Error running MongoDB commands:', error);
    }
  } else {
    displayArt(abortArt);
    process.exit(0);
  }
};

run();
