"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/userRoute.ts
const express_1 = require("express");
const user_1 = __importDefault(require("../models/user"));
const router = (0, express_1.Router)();
// Create a new user
router.post('/create', async (req, res) => {
    const { username, email } = req.body;
    try {
        const user = new user_1.default({ username, email });
        await user.save();
        res.status(201).json(user);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
// Get user profile
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await user_1.default.findById(id);
        if (!user)
            return res.status(404).json({ error: 'User not found' });
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// ADD BADGE TO USER
router.post('/badges', async (req, res) => {
    const { userId, badge } = req.body;
    try {
        const user = await user_1.default.findById(userId);
        if (!user)
            return res.status(404).json({ message: 'User not found' });
        // Add badge to the user's badges array
        if (!user.badges) {
            user.badges = []; // Initialize if it doesn't exist
        }
        user.badges.push(badge);
        await user.save();
        res.status(200).json({ badges: user.badges });
    }
    catch (error) {
        console.error('Error adding badge:', error);
        res.status(500).json({ error: 'Failed to add badge' });
    }
});
// GET USER BADGES
router.get('/badges/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const user = await user_1.default.findById(userId);
        if (!user)
            return res.status(404).json({ message: 'User not found' });
        res.status(200).json({ badges: user.badges });
    }
    catch (error) {
        console.error('Error fetching badges:', error);
        res.status(500).json({ error: 'Failed to fetch badges' });
    }
});
exports.default = router;
