"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.followUpMoodAnalysis = void 0;
const openai_1 = require("openai");
const dotenv_1 = __importDefault(require("dotenv"));
const user_1 = __importDefault(require("../models/user")); // Ensure User model is imported with correct casing
dotenv_1.default.config();
const openai = new openai_1.OpenAI({
    apiKey: process.env.OPENAI_API_KEY || '',
});
// Follow-up analysis based on user mood input
const followUpMoodAnalysis = async (req, res) => {
    var _a, _b;
    try {
        const { userInput, userId, data } = req.body; // Ensure userId and data are included
        if (!userInput) {
            return res.status(400).json({ error: "No user input provided." });
        }
        // Create a prompt based on the user's mood input
        const prompt = `Based on the mood input: "${userInput}", provide relevant follow-up questions to help the user explore their feelings further.`;
        // Send the prompt to OpenAI for generating follow-up questions
        const completion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'system', content: 'You are a helpful mood analysis assistant.' },
                { role: 'user', content: prompt },
            ],
            max_tokens: 150,
        });
        // Extract the follow-up questions from the response
        const followUpQuestionsText = (_b = (_a = completion.choices[0]) === null || _a === void 0 ? void 0 : _a.message) === null || _b === void 0 ? void 0 : _b.content;
        // Check if we got valid follow-up questions
        if (!followUpQuestionsText) {
            return res.status(500).json({ error: "Could not generate follow-up questions." });
        }
        // Split the follow-up questions into an array by line or by a delimiter (e.g., new line)
        const followUpQuestionsArray = followUpQuestionsText.split('\n').map(q => q.trim()).filter(q => q); // Filter out empty strings
        // Add this inside your follow-up analysis route
        const user = await user_1.default.findById(userId); // Fetch user by userId
        if (user) {
            user.moodHistory.push({ mood: data.mood, date: new Date() }); // Update mood history
            await user.save(); // Save the updated user
        }
        else {
            return res.status(404).json({ error: "User not found." });
        }
        // Send the array of follow-up questions back to the client
        res.status(200).json({ followUpQuestions: followUpQuestionsArray });
    }
    catch (error) {
        console.error('Error during follow-up mood analysis:', error); // Log the error for debugging
        res.status(500).json({ error: "Failed to analyze mood follow-up." });
    }
};
exports.followUpMoodAnalysis = followUpMoodAnalysis;
