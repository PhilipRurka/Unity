import mongoose from 'mongoose';

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

  await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.MONGODB_DATABASE}`);
};

export default connectToDatabase;
