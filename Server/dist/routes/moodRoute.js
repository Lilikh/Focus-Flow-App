"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const moodController_1 = require("../controllers/moodController");
const router = (0, express_1.Router)();
// Ask mood question - GET route
router.get('/ask', (req, res) => {
    return (0, moodController_1.askMoodQuestion)(req, res);
});
// Analyze mood - POST route
router.post('/analyze', async (req, res) => {
    await (0, moodController_1.analyzeMood)(req, res);
});
exports.default = router;
