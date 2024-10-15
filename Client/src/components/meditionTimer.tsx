import React, { useState, useEffect } from 'react';
import '../index.css'; // Make sure your breathing circle styles are included

interface MeditationTimerProps {
  initialDuration: number; // Pass initial duration in seconds
}

const MeditationTimer: React.FC<MeditationTimerProps> = ({ initialDuration }) => {
  const [duration, setDuration] = useState(initialDuration); // Set the duration to the initial value passed
  const [isActive, setIsActive] = useState(false); // Manage timer active state
  const [breathPhase, setBreathPhase] = useState<'Inhale' | 'Exhale'>('Inhale'); // Keep track of inhale/exhale phase

  useEffect(() => {
    let countdown: NodeJS.Timeout | null = null;

    if (isActive && duration > 0) {
      countdown = setInterval(() => {
        setDuration((prevDuration) => {
          if (prevDuration <= 0) {
            clearInterval(countdown!);
            setIsActive(false);
            return 0;
          }
          return prevDuration - 1;
        });
      }, 1000);
    }

    return () => clearInterval(countdown!);
  }, [isActive, duration]);

  // Breathing phase cycle: Alternate every 4 seconds between inhale and exhale
  useEffect(() => {
    let countdown: NodeJS.Timeout | null = null;

    if (isActive && duration > 0) {
      countdown = setInterval(() => {
        setDuration((prevDuration) => {
          if (prevDuration <= 0) {
            clearInterval(countdown!);
            setIsActive(false);
            return 0;
          }
          return prevDuration - 1;
        });
      }, 1000);
    }

    return () => clearInterval(countdown!);
  }, [isActive, duration]);

  // Breathing phase cycle: Alternate every 4 seconds between inhale and exhale
  useEffect(() => {
    let breathInterval: NodeJS.Timeout | null = null;

    if (isActive) {
      breathInterval = setInterval(() => {
        setBreathPhase((prev) => (prev === 'Inhale' ? 'Exhale' : 'Inhale'));
      }, 4000); // Switch between inhale and exhale every 4 seconds
    }

    return () => clearInterval(breathInterval!);
  }, [isActive]);

  const startTimer = () => {
    if (!isActive) {
      setIsActive(true);
      setDuration(initialDuration);
    }
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setDuration(initialDuration);
  };

  return (
    <div className={`max-w-md mx-auto p-6 text-black shadow-md rounded-lg text-center ${isActive ? 'bg-green-500' : 'bg-red-700'}`}>
      <h2 className="text-2xl font-bold mb-6">Breathing Meditation</h2>
      <div className="breathing-circle-container">
        <div className={`breathing-circle ${breathPhase.toLowerCase()}`}></div>
        <p className="breath-instructions text-2xl font-semibold p-2 mb-4">{breathPhase}</p>
      </div>
      <p className="mb-2 text-lg">
        Time remaining: {Math.floor(duration / 120)}:{('0' + (duration % 60)).slice(-2)} minutes
      </p>
      <div className="flex justify-between mb-4">
        <button 
          onClick={startTimer} 
          disabled={isActive} 
          className={`bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition ${isActive ? 'opacity-50' : ''}`}
        >
          Start
        </button>
        <button 
          onClick={stopTimer} 
          disabled={!isActive} 
          className={`bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition ${!isActive ? 'opacity-50' : ''}`}
        >
          Stop
        </button>
        <button 
          onClick={resetTimer} 
          className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition"
        >
          Reset
        </button>
      </div>

      <div className="breathing-guide text-left mt-6 mb-2">
        <h3 className="text-xl font-bold mb-3">Breathing Exercise Guide:</h3>
        <p className="mt-2 bg-green-800 text-white p-6">
          Focus on the circle as it expands and contracts. Inhale deeply through your nose as the circle expands, and exhale slowly through your mouth as the circle contracts. Continue to follow the rhythm of the circle as you breathe in and out, allowing your mind to stay focused on the present moment.
        </p>
      </div>

      <div>{isActive ? `Timer is running...` : `Timer is stopped`}</div>
    </div>
  );
};

export default MeditationTimer;
