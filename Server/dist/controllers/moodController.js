"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeMood = exports.askMoodQuestion = void 0;
const openai_1 = require("openai");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const openai = new openai_1.OpenAI({
    apiKey: process.env.OPENAI_API_KEY || '',
});
// Ask the user a question about their mood
const askMoodQuestion = (req, res) => {
    try {
        const question = "How are you feeling right now? Please describe your mood in a few words.";
        res.status(200).json({ question });
    }
    catch (error) {
        res.status(500).json({ error: "Failed to ask mood question." });
    }
};
exports.askMoodQuestion = askMoodQuestion;
// Analyze user's response and determine mood
const analyzeMood = async (req, res) => {
    var _a, _b;
    try {
        const { response } = req.body; // User's response from the front-end
        if (!response) {
            return res.status(400).json({ error: "No response provided." });
        }
        // Send the user's response to OpenAI for analysis
        const completion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo', // Use the newer model here
            messages: [
                { role: 'system', content: 'You are a helpful meditation assistant.' },
                { role: 'user', content: response } // Corrected from 'prompt' to 'response'
            ],
            max_tokens: 150,
        });
        // Correct way to access message content
        const mood = ((_b = (_a = completion.choices[0]) === null || _a === void 0 ? void 0 : _a.message) === null || _b === void 0 ? void 0 : _b.content) || "Could not determine mood.";
        res.status(200).json({ mood });
    }
    catch (error) {
        res.status(500).json({ error: "Failed to analyze mood." });
    }
};
exports.analyzeMood = analyzeMood;
