// /server/models/Meditation.ts
import mongoose from 'mongoose';

const MeditationSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    meditationType: { type: String, required: true }, // e.g., stress, focus, calm
    date: { type: Date, default: Date.now },
    timeSpent: { type: Number, required: true }, // minutes spent
});

export default mongoose.model('Meditation', MeditationSchema);
