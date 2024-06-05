import readline from 'readline';

import executeStep from '../utils/executeStep.js';
import deleteUserActivitiesAnalytics from './deleteUserActivitiesAnalytics.js';
import deleteUserByEmail from './deleteUserByEmail.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function registerUser(email: string) {
  await executeStep('Step 1: Delete user in database', () => deleteUserByEmail(email));

  await executeStep('Step 2: Delete activitiesAnalytics using email', () => deleteUserActivitiesAnalytics(email));
}

rl.question('Enter email: ', (email) => {
  registerUser(email).then(() => {
    rl.close();
  });
});
