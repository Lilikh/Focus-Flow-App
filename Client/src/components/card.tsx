// components/Card.tsx
import React from 'react';

interface CardProps {
  title: string;
  description: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, onClick }) => {
  return (
    <div
      className="p-4 bg-blue-200 rounded-lg shadow-md cursor-pointer hover:bg-blue-300 transition"
      onClick={onClick}
    >
      <h2 className="text-xl font-semibold">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
