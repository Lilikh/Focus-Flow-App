// routes/userRoute.ts
import { Router, Request, Response } from 'express';
import User from '../models/user';

const router = Router();

// Create a new user
router.post('/create', async (req: Request, res: Response) => {
    const { username, email } = req.body;
    try {
        const user = new User({ username, email });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
});

// Get user profile
router.get('/:id', async (req: Request<{ id: string }>, res: Response): Promise<any> => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});
// ADD BADGE TO USER
router.post('/badges', async (req: Request, res: Response):Promise<any> => {
    const { userId, badge } = req.body;
    try {
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: 'User not found' });

        // Add badge to the user's badges array
        if (!user.badges) {
            user.badges = []; // Initialize if it doesn't exist
        }
        user.badges.push(badge);
        await user.save();

        res.status(200).json({ badges: user.badges });
    } catch (error) {
        console.error('Error adding badge:', error);
        res.status(500).json({ error: 'Failed to add badge' });
    }
});
// GET USER BADGES
router.get('/badges/:userId', async (req: Request<{ userId: string }>, res: Response): Promise<any> => {
    const { userId } = req.params;
    try {
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: 'User not found' });

        res.status(200).json({ badges: user.badges });
    } catch (error) {
        console.error('Error fetching badges:', error);
        res.status(500).json({ error: 'Failed to fetch badges' });
    }
});

export default router;
