import mongoose from 'mongoose';

const mongoConnect: any = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw Error('Client Failed');
    }

    await mongoose.connect(`${process.env.MONGODB_URI}${process.env.MONGODB_DATABASE}`);
  } catch (error) {
    throw Error(`Bad connection with MongoDB -> Database: ${process.env.MONGODB_DATABASE}`);
  }
};

export default mongoConnect;
