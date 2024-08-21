import mongoose from "mongoose";
import DB_NAME from "../constants.js";

const connectDB = async () => {
  try {
    const dbinstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(`\n mongoDB connected ${dbinstance.connection.host} `);
  } catch (error) {
    console.log("mongodb connection error:", error);
    process.exit(1);
  }
};
export default connectDB;
