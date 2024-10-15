import React, { useState } from 'react';

interface MeditationCardProps {
  onStartMeditation: (type: string, duration: number) => void;
  onOpenMoodAnalyzer: () => void; // New prop for opening the MoodAnalyzer
}

const MeditationCard: React.FC<MeditationCardProps> = ({ onStartMeditation, onOpenMoodAnalyzer }) => {
  const [duration] = useState(10); // Default to 10 minutes
  const [meditationType, setMeditationType] = useState('Mindfulness');

  // Questions for guided meditation
  const questions = [
    "What is your main intention for this meditation session?",
    "How are you feeling right now?",
    "What do you hope to achieve through this meditation?",
  ];

  const [userAnswers, setUserAnswers] = useState<string[]>(Array(questions.length).fill(''));
  const [showQuestions, setShowQuestions] = useState(false); // State to control showing questions

  const handleStartMeditation = () => {
    if (meditationType === 'Guided') {
      setShowQuestions(true); // Show the questions for Guided meditation
    } else {
      onStartMeditation(meditationType, duration); // Call onStartMeditation for other types
    }
  };

  const handleStartGuidedMeditation = () => {
    // Check if all questions are answered
    if (userAnswers.every(answer => answer.trim() !== '')) {
      setShowQuestions(false); // Hide questions
      onOpenMoodAnalyzer(); // Call the function to open the MoodAnalyzer
    } else {
      alert('Please answer all questions before proceeding.'); // Alert if not all questions are answered
    }
  };

  const handleAnswerChange = (index: number, answer: string) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[index] = answer;
    setUserAnswers(updatedAnswers);
  };

  return (
    <div className="meditation-card border rounded p-12 m-2 bg-gray-800">
      <h2 className='mb-2'>Meditation Session</h2>
      <p className='mb-2'>Select a type of meditation:</p>
      <select 
        value={meditationType} 
        onChange={(e) => setMeditationType(e.target.value)}
        className="border rounded p-1 mb-2 text-gray-700"
      >
        <option value="Mindfulness">Mindfulness</option>
        <option value="Guided">Guided</option>
        <option value="Breath Awareness">Breath Awareness</option>
      </select>
  
      <button onClick={handleStartMeditation} className="mt-2">Start Meditation</button>

      {showQuestions && (
        <div className="mt-4">
          <h3 className="font-bold">Please answer the following questions:</h3>
          <ul>
            {questions.map((question, index) => (
              <li key={index} className="mb-2">
                <label>
                  {question}
                  <input
                    type="text"
                    value={userAnswers[index]}
                    onChange={(e) => handleAnswerChange(index, e.target.value)}
                    className="border rounded p-1 ml-2 w-full text-gray-800" // Add your desired styles here
                  />
                </label>
              </li>
            ))}
          </ul>
          <p className="mt-2">Click below to start your guided meditation!</p>
          <button onClick={handleStartGuidedMeditation} className="mt-2 bg-blue-500 text-white p-2 rounded">
            Start Guided Meditation
          </button>
        </div>
      )}
    </div>
  );
};

export default MeditationCard;
