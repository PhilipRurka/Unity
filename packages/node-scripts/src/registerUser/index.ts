import crypto from 'crypto';
import readline from 'readline';

import executeStep from '../utils/executeStep.js';
import createActivitiesAnalytics from './createActivitiesAnalytics.js';
import createUsers from './createUser.js';
import createUserWithCredentials from './createUserWithCredentials.js';
import sendgridInvitationEmail from './sendgridInvitationEmail.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function registerUser(email: string) {
  const password = crypto.randomBytes(8).toString('hex');

  const userId = await executeStep('Step 1: Create new user in database', () =>
    createUserWithCredentials(email, password)
  );

  await executeStep('Step 2: Create new ActivitiesAnalytics with id', () => createUsers(userId, email));

  await executeStep('Step 3: Create new User with id', () => createActivitiesAnalytics(userId));

  await executeStep('Step 4: Create and send invitation email', () => sendgridInvitationEmail(email, password));
}

rl.question('Enter email: ', (email) => {
  registerUser(email).then(() => {
    rl.close();
  });
});
