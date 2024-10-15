"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMood = void 0;
const user_1 = __importDefault(require("../models/user")); // Adjust the path as needed
const updateMood = async (req, res) => {
    const { userId, mood } = req.body;
    try {
        // Find the user and update the mood
        const user = await user_1.default.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found." });
        }
        // Ensure you are accessing mood correctly
        user.mood = mood; // This should work if mood is defined in your User interface
        await user.save();
        return res.status(200).json({ message: "Mood updated successfully.", mood: user.mood });
    }
    catch (error) {
        console.error('Error updating mood:', error);
        return res.status(500).json({ error: error.message });
    }
};
exports.updateMood = updateMood;
