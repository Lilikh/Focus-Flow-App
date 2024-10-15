// components/MeditationTimer.tsx
import React, { useState } from 'react';

const MeditationTimer: React.FC = () => {
    const [duration, setDuration] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null); // Updated type

    const startTimer = () => {
        setIsActive(true);
        const countdown = setInterval(() => {
            setDuration((prev) => {
                if (prev <= 0) {
                    clearInterval(countdown);
                    setIsActive(false);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        setTimer(countdown as NodeJS.Timeout); // Cast countdown to NodeJS.Timeout
    };

    const stopTimer = () => {
        if (timer) clearInterval(timer);
        setIsActive(false);
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white text-black shadow-md rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Meditation Timer</h2>
            <input 
                type="number" 
                value={duration} 
                onChange={(e) => setDuration(Number(e.target.value))} 
                placeholder="Duration in seconds" 
                className="border border-gray-300 rounded p-2 mb-4 w-full"
            />
            <div className="flex justify-between mb-4">
                <button 
                    onClick={startTimer} 
                    disabled={isActive}
                    className={`bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition ${isActive ? 'opacity-50' : ''}`}
                >
                    Start
                </button>
                <button 
                    onClick={stopTimer} 
                    disabled={!isActive} 
                    className={`bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition ${!isActive ? 'opacity-50' : ''}`}
                >
                    Stop
                </button>
            </div>
            <div>{isActive ? `Time left: ${duration}s` : `Timer stopped`}</div>
        </div>
    );
};

export default MeditationTimer;
