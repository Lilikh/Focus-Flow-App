import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const connectDB = async (): Promise<void> => {
    try {
      // Build the connection string using environment variables
      const DB = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@trullo.ygh95.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
  
      // Connect to MongoDB
      await mongoose.connect(DB);
  
  
      console.log("MongoDB connected successfully.");
    } catch (err) {
      console.error("Error connecting to MongoDB:", err);
      process.exit(1);
    }
  };
  
  export default connectDB;
  