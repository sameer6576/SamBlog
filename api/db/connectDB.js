import mongoose from "mongoose";

const connnectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    console.log("Mongo db is connected successfully");
    console.log("DB HOST:",connection.connection.host);
  } catch (error) {
    console.log("Error in connecting to the mongo db");
  }
};
export { connnectDB };
