"use strict";
// controllers/openAIController.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUserData = void 0;
const user_1 = __importDefault(require("../models/user")); // Import User model
// Function to get user data
const getUserData = async (req, res) => {
    try {
        const user = await user_1.default.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({ message: 'An error occurred', error });
    }
};
exports.getUserData = getUserData;
// Function to create a new user
const createUser = async (req, res) => {
    try {
        const newUser = new user_1.default(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    }
    catch (error) {
        res.status(500).json({ message: 'An error occurred', error });
    }
};
exports.createUser = createUser;
