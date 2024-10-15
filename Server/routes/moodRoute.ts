import { Router, Request, Response } from 'express';
import { askMoodQuestion, analyzeMood } from '../controllers/moodController';

const router = Router();

// Ask mood question - GET route
router.get('/ask', (req: Request, res: Response) => {
    return askMoodQuestion(req, res);
});

// Analyze mood - POST route
router.post('/analyze', async (req: Request, res: Response) => {
    await analyzeMood(req, res);
});

export default router;
