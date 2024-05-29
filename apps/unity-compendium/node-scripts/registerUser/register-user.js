import crypto from 'crypto';
import readline from 'readline';

import executeStep from '../utils/executeStep.js';
import createActivitiesAnalytics from './createActivitiesAnalytics.js';
import createUserWithCredentials from './createUserWithCredentials.js';
import sendgridInvitationEmail from './sendgridInvitationEmail.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function registerUser(email) {
  const password = crypto.randomBytes(8).toString('hex');

  await executeStep('Step 1: Create new user in database', () => createUserWithCredentials(email, password));

  await executeStep('Step 2: Create new ActivitiesAnalytics using email', () => createActivitiesAnalytics(email));

  await executeStep('Step 3: Create and send invitation email', () => sendgridInvitationEmail(email, password));
}

rl.question('Enter email: ', (email) => {
  registerUser(email).then(() => {
    rl.close();
  });
});
