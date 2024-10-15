// components/MoodDiary.tsx
import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const MoodDiary: React.FC<{ userId: string }> = ({ userId }) => {
    const [moodData, setMoodData] = useState<any[]>([]);

    useEffect(() => {
        const fetchMoodHistory = async () => {
            const response = await fetch(`http://localhost:3000/api/users/${userId}`);
            const data = await response.json();
            setMoodData(data.moodHistory);
        };
        fetchMoodHistory();
    }, [userId]);

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Mood Diary</h2>
            <LineChart width={600} height={300} data={moodData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="mood" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </div>
    );
};

export default MoodDiary;
