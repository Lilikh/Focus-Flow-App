"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// /server/models/Meditation.ts
const mongoose_1 = __importDefault(require("mongoose"));
const MeditationSchema = new mongoose_1.default.Schema({
    userId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'User', required: true },
    meditationType: { type: String, required: true }, // e.g., stress, focus, calm
    date: { type: Date, default: Date.now },
    timeSpent: { type: Number, required: true }, // minutes spent
});
exports.default = mongoose_1.default.model('Meditation', MeditationSchema);
