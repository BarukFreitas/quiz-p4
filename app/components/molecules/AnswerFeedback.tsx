"use client";

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

const AnswerFeedback: React.FC<AnswerFeedbackProps> = ({ isCorrect, characterName, fullImage, onNext }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center">
      <Typography variant="h2" className={`mb-2 ${isCorrect ? 'text-[#c4d70c]' : 'text-[#c22303]'}`}>
        {isCorrect ? 'Correto!' : 'Incorreto!'}
      </Typography>
      <Typography variant="h3" className="mb-2">{characterName}</Typography>
      <Image src={fullImage} alt={characterName} width={150} height={150} className="mb-4 object-contain rounded-md" />
      <Button onClick={onNext} variant="primary">Próxima Pergunta</Button>
    </div>
  );
};

export default AnswerFeedback;