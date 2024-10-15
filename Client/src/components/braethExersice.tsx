import React, { useState } from 'react';

interface MoodAnalyzerProps {
  onAnalyze: (response: string) => Promise<void>; // Change to return a Promise
  mood: string;
  onClose: () => void; // New prop for closing the component
}

const MoodAnalyzer: React.FC<MoodAnalyzerProps> = ({ onAnalyze, mood, onClose }) => {
  const [responseText, setResponseText] = useState('');

  const handleMoodSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (responseText.trim()) { // Ensure not to submit empty text
      await onAnalyze(responseText); // Call the analyze function
      setResponseText(''); // Clear the input after submission
    }
  };

  return (
    <div className="upload-section relative p-4 bg-white shadow-md rounded-lg">
      {/* Close Button */}
      <button
        onClick={onClose} // Call the close function passed as a prop
        className="absolute top-2 right-2 text-red-500"
      >
        X
      </button>
      <p>Upload your input or describe how you're feeling right now to analyze your mood.</p>
      <form onSubmit={handleMoodSubmit}> {/* Wrap in a form to handle submission */}
        <textarea
          value={responseText}
          onChange={(e) => setResponseText(e.target.value)}
          placeholder="How are you feeling?"
          className="border rounded p-2 w-full" // Add your desired styles here
        />
        <button type="submit" className="mt-2">Analyze Mood</button> {/* Submit button */}
      </form>
      {mood && <div className="mood-result"><p>Your mood is: {mood}</p></div>}
    </div>
  );
};

export default MoodAnalyzer;
