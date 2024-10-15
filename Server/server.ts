import express, { Request, Response } from "express";
import cors from 'cors';
import userRoutes from './routes/userRoute';
import meditationRoutes from './routes/meditionRoute';
import moodRoute from './routes/moodRoute'
import follwUpRouter from './routes/followUp'
import connectDB from './db/connect';
import dotenv from 'dotenv';

dotenv.config();
connectDB();
const app = express();

app.use(cors({
    origin: 'http://localhost:5173', 
    methods: 'GET,POST', 
    credentials: true, 
}));
app.use(express.json());

const PORT:string | number = process.env.PORT || 4000;



app.get("/", (req: Request, res: Response): void => {
    res.send("Hello from Express server");
})


app.use('/api/users', userRoutes);
app.use('/meditations', meditationRoutes);
app.use('/mood', moodRoute)
app.use('/followup', follwUpRouter)
app.use('/api/meditation', meditationRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
