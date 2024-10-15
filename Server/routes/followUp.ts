// moodRoute.ts
import { Router, Request, Response } from 'express';
import { followUpMoodAnalysis } from '../controllers/followUpController';
import { askMoodQuestion, analyzeMood} from '../controllers/moodController'

const router = Router();

// Ask mood question - GET route
router.get('/ask', (req: Request, res: Response) => {
    return askMoodQuestion(req, res);
});

// Analyze mood - POST route
router.post('/analyze', async (req: Request, res: Response) => {
    await analyzeMood(req, res);
});

// Follow-up mood analysis - POST route
router.post('/followup', async (req: Request, res: Response) => {
    await followUpMoodAnalysis(req, res); // Add this line
});

export default router;
