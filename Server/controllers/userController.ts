import { Request, Response } from 'express';
import UserModel from '../models/user'; // Adjust the path as needed

export const updateMood = async (req: Request, res: Response) => {
  const { userId, mood } = req.body;

  try {
    // Find the user and update the mood
    const user = await UserModel.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    // Ensure you are accessing mood correctly
    user.mood = mood; // This should work if mood is defined in your User interface
    await user.save();

    return res.status(200).json({ message: "Mood updated successfully.", mood: user.mood });
  } catch (error ) {
    console.error('Error updating mood:', error);
    return res.status(500).json({ error: (error as Error).message });
  }
};
