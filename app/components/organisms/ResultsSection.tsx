import React from 'react';
import Typography from '../atoms/Typography';

interface ResultsSectionProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const ResultsSection: React.FC<ResultsSectionProps> = ({ score, totalQuestions, onRestart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center gap-4">
      <Typography variant="h2" className="text-center mb-4">Resultado do Quiz!</Typography>
      <Typography variant="p" className="text-lg font-semibold">Sua pontuação: {score} de {totalQuestions}</Typography>
      <div className="mt-4">
        <button onClick={onRestart} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Jogar Novamente
        </button>
      </div>
    </div>
  );
};

export default ResultsSection;