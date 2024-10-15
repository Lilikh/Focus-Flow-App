// /server/controllers/meditationController.ts
import { Request, Response } from 'express';
import { OpenAI } from 'openai';  // Use OpenAI class directly
import Meditation from '../models/medition';
import dotenv from "dotenv";
dotenv.config();

console.log("OpenAI API Key:", process.env.OPENAI_API_KEY);
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || ''  // Use default value if undefined
});

export const generateMeditation = async (req: Request, res: Response) => {
    try {
        const { mood, userId } = req.body;
        let prompt: string;

        if (mood === 'stressed') {
            prompt = 'Create a calming meditation for stress relief.';
        } else if (mood === 'focused') {
            prompt = 'Create a short meditation to enhance focus and concentration.';
        } else {
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

        const meditationText = completion.choices[0]?.message?.content || "Meditation content is unavailable.";

        const meditation = new Meditation({
            userId,
            meditationType: mood,
            timeSpent: 10, // Example: 10 minutes meditation
        });

        await meditation.save();

        res.status(200).json({ meditationText, meditation });
    } catch (error) {
        res.status(500).json({ error: error instanceof Error ? error.message : error });
    }
};