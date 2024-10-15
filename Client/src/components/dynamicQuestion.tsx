// DynamicQuestionnaire.tsx
import React, { useState } from 'react';

interface DynamicQuestionnaireProps {
  questions: string[];
  onAnswer: (answer: string) => void;
}

const DynamicQuestionnaire: React.FC<DynamicQuestionnaireProps> = ({ questions, onAnswer }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');

  const handleNextQuestion = () => {
    if (userAnswer.trim() === '') {
      alert('Please provide an answer before proceeding.'); // Simple validation
      return;
    }

    onAnswer(userAnswer); // Pass the answer to the parent component

    // Reset the user answer for the next question
    setUserAnswer('');

    // Move to the next question if available
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log('All questions answered');
      // Optionally, you can reset the questionnaire or do something else here
    }
  };
  console.log('Follow-up Questions:', handleNextQuestion);


  return (
    <div>
      <h2>{questions[currentQuestionIndex]}</h2>
      <input
        type="text"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        placeholder="Your answer..."
      />
      <button onClick={handleNextQuestion}>Next</button>
    </div>
  );
};

export default DynamicQuestionnaire;
