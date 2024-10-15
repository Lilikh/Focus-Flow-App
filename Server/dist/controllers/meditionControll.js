"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMeditation = void 0;
const openai_1 = require("openai"); // Use OpenAI class directly
const medition_1 = __importDefault(require("../models/medition"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
console.log("OpenAI API Key:", process.env.OPENAI_API_KEY);
const openai = new openai_1.OpenAI({
    apiKey: process.env.OPENAI_API_KEY || '' // Use default value if undefined
});
const generateMeditation = async (req, res) => {
    var _a, _b;
    try {
        const { mood, userId } = req.body;
        let prompt;
        if (mood === 'stressed') {
            prompt = 'Create a calming meditation for stress relief.';
        }
        else if (mood === 'focused') {
            prompt = 'Create a short meditation to enhance focus and concentration.';
        }
        else {
            prompt = 'Create a general mindfulness meditation.';
        }
        const completion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo', // Use the newer model here
            messages: [
                { role: 'system', content: 'You are a helpful meditation assistant.' },
                { role: 'user', content: prompt }
            ],
            max_tokens: 150,
        });
        const meditationText = ((_b = (_a = completion.choices[0]) === null || _a === void 0 ? void 0 : _a.message) === null || _b === void 0 ? void 0 : _b.content) || "Meditation content is unavailable.";
        const meditation = new medition_1.default({
            userId,
            meditationType: mood,
            timeSpent: 10, // Example: 10 minutes meditation
        });
        await meditation.save();
        res.status(200).json({ meditationText, meditation });
    }
    catch (error) {
        res.status(500).json({ error: error instanceof Error ? error.message : error });
    }
};
exports.generateMeditation = generateMeditation;
