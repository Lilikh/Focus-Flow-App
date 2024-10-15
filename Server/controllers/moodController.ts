import { Request, Response } from 'express';
import { OpenAI } from 'openai';
import dotenv from 'dotenv';
dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || '',
});

// Ask the user a question about their mood
export const askMoodQuestion = (req: Request, res: Response) => {
    try {
        const question = "How are you feeling right now? Please describe your mood in a few words.";
        res.status(200).json({ question });
    } catch (error) {
        res.status(500).json({ error: "Failed to ask mood question." });
    }
};

// Analyze user's response and determine mood
export const analyzeMood = async (req: Request, res: Response) => {
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
        const mood = completion.choices[0]?.message?.content || "Could not determine mood.";

        res.status(200).json({ mood });
    } catch (error) {
        res.status(500).json({ error: "Failed to analyze mood." });
    }
};
