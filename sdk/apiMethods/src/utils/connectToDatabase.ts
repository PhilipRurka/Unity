import mongoose from 'mongoose';

// mongoose.set('debug', true);

const connectToDatabase = async () => {
  if (mongoose.connection.readyState === 1) {
    return;
  }

  if (mongoose.connection.readyState === 2) {
    await new Promise((resolve) => {
      mongoose.connection.once('connected', resolve);
    });

    return;
  }

  mongoose.set('strictQuery', true);

  await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.MONGODB_DATABASE}`);
};

export default connectToDatabase;
