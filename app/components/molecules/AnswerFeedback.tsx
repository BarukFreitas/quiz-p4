import React from 'react';
import Image from '../atoms/Image';
import Typography from '../atoms/Typography';
import Button from '../atoms/Button';

interface AnswerFeedbackProps {
  isCorrect: boolean;
  correctAnswer: string;
  characterName: string;
  fullImage: string;
  onNext: () => void;
}

const AnswerFeedback: React.FC<AnswerFeedbackProps> = ({ isCorrect, correctAnswer, characterName, fullImage, onNext }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
      {isCorrect ? (
        <Typography variant="h2" className="text-green-500 mb-2">Correto!</Typography>
      ) : (
        <Typography variant="h2" className="text-red-500 mb-2">Incorreto!</Typography>
      )}
      <Image src={fullImage} alt={characterName} width={150} height={150} className="mb-4 object-contain rounded-md" />
      <Typography variant="p" className="mb-4 text-center">A resposta correta era: <span className="font-bold">{correctAnswer}</span> ({characterName})</Typography>
      <Button onClick={onNext} variant="primary">Próxima Pergunta</Button>
    </div>
  );
};

export default AnswerFeedback;