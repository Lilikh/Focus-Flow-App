import React from 'react';

interface MoodQuestionProps {
  title: string;
  description: string;
  onClick: () => void;
}

const MoodQuestion: React.FC<MoodQuestionProps> = ({ title, description, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer transition transform hover:scale-105"
    >
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-4 text-gray-400">
        {description.substring(0, 50)}...
      </p>
    </div>
  );
};

export default MoodQuestion;
