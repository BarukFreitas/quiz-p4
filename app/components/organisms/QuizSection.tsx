"use client";
import React, { useState } from 'react';
import QuestionCard from '../molecules/QuestionCard';
import AnswerFeedback from '../molecules/AnswerFeedback';
import { Question } from '../../types'; // Importe a interface Question

interface QuizSectionProps {
  questions: Question[];
  onQuizComplete: (score: number) => void;
  onAnswerSelect: (answer: string) => void; // Adicione a prop onAnswerSelect
  onNextQuestion: () => void; // Adicione a prop onNextQuestion
  currentQuestion: Question; // Adicione a prop currentQuestion
}

const QuizSection: React.FC<QuizSectionProps> = ({ questions, onQuizComplete, onAnswerSelect, onNextQuestion, currentQuestion }) => {
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);

  const handleAnswerSelection = (answer: string) => {
    onAnswerSelect(answer);
    setIsCorrect(answer === currentQuestion.correctAnswer);
  };

  const handleNext = () => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
    setIsCorrect(null);
    onNextQuestion();
  };

  if (!currentQuestion) {
    return <div>Carregando perguntas...</div>; // Ou outra mensagem de carregamento
  }

  return (
    <div className="flex flex-col items-center gap-4">
      {isCorrect === null ? (
        <QuestionCard
          image={currentQuestion.image}
          options={currentQuestion.options}
          onSelect={handleAnswerSelection}
        />
      ) : (
        <AnswerFeedback
          isCorrect={isCorrect}
          correctAnswer={currentQuestion.correctAnswer}
          characterName={currentQuestion.characterName}
          fullImage={currentQuestion.fullImage}
          onNext={handleNext}
        />
      )}
      <p className="text-gray-600">Pergunta {currentQuestion.id} de {questions.length}</p>
      {isCorrect !== null && <p className="text-blue-500">Pontuação atual: {score}</p>}
    </div>
  );
};

export default QuizSection;