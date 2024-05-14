/* eslint-disable import/no-extraneous-dependencies */

/* eslint-disable no-console */
import sgMail from '@sendgrid/mail';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import { MongoClient } from 'mongodb';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function generatePassword() {
  return crypto.randomBytes(8).toString('hex');
}

async function registerUser(email) {
  const { MONGODB_URI, SENDGRID_API_KEY } = (await import('./env-variables.js')).default();

  const client = new MongoClient(MONGODB_URI);

  const password = generatePassword();
  try {
    await client.connect();
    const db = client.db('Production');
    const users = db.collection('users');

    const hashedPassword = await bcrypt.hash(password, 10);

    await users.insertOne({ email, password: hashedPassword });

    console.log(`Password: ${password}`);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }

  sgMail.setApiKey(SENDGRID_API_KEY);
  const msg = {
    to: email,
    from: 'hey@philiprurka.com',
    subject: 'Welcome to the Unity Compendium',
    text: 'and easy to do anywhere, even with Node.js',
    html: `<strong>and easy to do anywhere, even with Node.js</strong>`,
  };

  try {
    await sgMail.send(msg);
    console.log('Email sent');
  } catch (error) {
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }
  }
}

rl.question('Enter email: ', (email) => {
  registerUser(email).then(() => {
    rl.close();
  });
});
