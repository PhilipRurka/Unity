/* eslint-disable no-console */
import bcrypt from "bcrypt";
import { MongoClient } from "mongodb";

const createUserWithCredentials = async (email, password) => {
  const { MONGODB_URI } = (await import("../utils/envVariables.js")).default();

  const client = new MongoClient(MONGODB_URI);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(email)) {
    throw Error("Not a valid email. According to Mr. Regex!");
  }

  try {
    await client.connect();
    const db = client.db("Production");
    const users = db.collection("users");

    const hashedPassword = await bcrypt.hash(password, 10);

    await users.insertOne({ email: email.toLowerCase(), password: hashedPassword });
  } catch (error) {
    throw Error("User not created in the database", error.message);
  } finally {
    await client.close();
  }
};

export default createUserWithCredentials;
