import React from 'react';
import Typography from '../atoms/Typography';

interface ScoreItemProps {
  name: string;
  score: number;
}

const ScoreItem: React.FC<ScoreItemProps> = ({ name, score }) => {
  return (
    <div className="bg-[#f0f0f0] rounded-md p-2 flex justify-between items-center"> {/* Fundo mais claro */}
      <Typography variant="span" className="font-semibold">{name}</Typography>
      <Typography variant="span" color="accent">{score} pontos</Typography> {/* Pontuação em laranja */}
    </div>
  );
};

export default ScoreItem;