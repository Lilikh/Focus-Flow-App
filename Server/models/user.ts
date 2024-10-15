import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    username: string;
    email: string;
    moodHistory: { date: Date, mood: string }[];
    badges: string[]; // Add badges as an array of strings
    mood: string; // Add mood property here
}

const UserSchema: Schema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    moodHistory: [{
        date: { type: Date, required: true },
        mood: { type: String }
    }],
    badges: { type: [String], default: [] } // Initialize badges with an empty array
});

const User = mongoose.model<IUser>('User', UserSchema);
export default User;
