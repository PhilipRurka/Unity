/* eslint-disable no-console */
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
  const { MONGODB_URI } = (await import('./env-variables.js')).default();

  const client = new MongoClient(MONGODB_URI);

  const password = generatePassword();
  try {
    await client.connect();
    const db = client.db('Production');
    const users = db.collection('users');

    const hashedPassword = await bcrypt.hash(password, 10);

    await users.insertOne({ email, password: hashedPassword });

    console.log(`Password: ${password}`);
  } catch (err) {
    console.error('Failed to create account:', err);
  } finally {
    await client.close();
  }
}

rl.question('Enter email: ', (email) => {
  registerUser(email).then(() => {
    rl.close();
  });
});
