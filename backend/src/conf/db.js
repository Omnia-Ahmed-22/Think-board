import mongoose from "mongoose";
import dotenv from "dotenv";

export const connectDB = async () => {
   try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("Database conected successfully!");
   } catch (error) {
      console.log("Database connnection failed: ", error);
   }
}