import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  //if the database is connected ,don't connect again
  if (connected) {
    console.log("mongodb is already connected");
    return;
  }

  //connect to mongo db
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log("Mongo db connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
