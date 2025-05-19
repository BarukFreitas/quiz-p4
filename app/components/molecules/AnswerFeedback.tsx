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
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center"> {/* Adicionado text-center */}
      {isCorrect ? (
        <Typography variant="h2" className="text-green-500 mb-2">Correto! <br /> {characterName}</Typography>
      ) : (
        <Typography variant="h2" className="text-red-500 mb-2">Incorreto! A resposta correta é: <br /> {characterName}</Typography>
      )}
      <Image src={fullImage} alt={characterName} width={150} height={150} className="mb-4 object-contain rounded-md" />
      <Button onClick={onNext} variant="primary">Próxima Pergunta</Button>
    </div>
  );
};

export default AnswerFeedback;