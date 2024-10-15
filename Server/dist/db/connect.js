"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const connectDB = async () => {
    try {
        // Build the connection string using environment variables
        const DB = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@trullo.ygh95.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
        // Connect to MongoDB
        await mongoose_1.default.connect(DB);
        console.log("MongoDB connected successfully.");
    }
    catch (err) {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1);
    }
};
exports.default = connectDB;
