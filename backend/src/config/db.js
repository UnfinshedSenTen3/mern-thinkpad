import mongoose from "mongoose";
//mongoose is used to add an extra layer of security between mongo and node.js

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGODB CONNECTED SUCCESSFULLY!");
  } catch (error) {
    console.error("Error connecting to MONGODB", error);
    process.exit(1); //1 is false or exit with failure
  }
};