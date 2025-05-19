import React from 'react';
import Typography from '../atoms/Typography';

interface ScoreItemProps {
  name: string;
  score: number;
}

const ScoreItem: React.FC<ScoreItemProps> = ({ name, score }) => {
  return (
    <div className="bg-gray-100 rounded-md p-2 flex justify-between items-center">
      <Typography variant="span" className="font-semibold">{name}</Typography>
      <Typography variant="span">{score} pontos</Typography>
    </div>
  );
};

export default ScoreItem;