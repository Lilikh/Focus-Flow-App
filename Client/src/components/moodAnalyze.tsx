import React, { useState } from 'react';

interface MoodAnalyzerProps {
  onAnalyze: (response: string) => void;
  mood: string;
  followUpQuestion: string | null;
  onFollowUpAnswer: (answer: string) => void;
}

const MoodAnalyzer: React.FC<MoodAnalyzerProps> = ({ onAnalyze, mood, followUpQuestion, onFollowUpAnswer }) => {
  const [responseText, setResponseText] = useState('');
  const [followUpText, setFollowUpText] = useState('');

  const handleMoodSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAnalyze(responseText);
    setResponseText(''); // Clear the input after submission
  };

  const handleFollowUpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFollowUpAnswer(followUpText);
    setFollowUpText(''); // Clear follow-up input
  };

  return (
    <div className="upload-section">
      <p>Upload your input or describe how you're feeling right now to analyze your mood.</p>
      <textarea
        value={responseText}
        onChange={(e) => setResponseText(e.target.value)}
        placeholder="How are you feeling?"
      />
      <button onClick={handleMoodSubmit}>Analyze Mood</button>
      {mood && <div className="mood-result"><p>Your mood is: {mood}</p></div>}
      {followUpQuestion && (
        <div className="follow-up-section">
          <p>{followUpQuestion}</p>
          <textarea
            value={followUpText}
            onChange={(e) => setFollowUpText(e.target.value)}
            placeholder="Your answer..."
          />
          <button onClick={handleFollowUpSubmit}>Submit Answer</button>
        </div>
      )}
    </div>
  );
};

export default MoodAnalyzer;
