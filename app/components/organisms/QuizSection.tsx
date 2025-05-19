// ./app/components/organisms/QuizSection.tsx
"use client";
import React, { useState } from 'react';
import QuestionCard from '../molecules/QuestionCard';
import AnswerFeedback from '../molecules/AnswerFeedback';
import { Question } from '../../types';
import Typography from '../atoms/Typography';

interface QuizSectionProps {
  questions: Question[];
  onAnswerSelect: (answer: string) => void;
  onNextQuestion: () => void;
  currentQuestion: Question;
}

const QuizSection: React.FC<QuizSectionProps> = ({ questions, onAnswerSelect, onNextQuestion, currentQuestion }) => {
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);

  const handleAnswerSelection = (answer: string) => {
    onAnswerSelect(answer);
    const isCorrectAnswer = answer === currentQuestion.correctAnswer;
    setIsCorrect(isCorrectAnswer);
    if (isCorrectAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handleNext = () => {
    setIsCorrect(null);
    onNextQuestion();
  };

  if (!currentQuestion) {
    return <div className="flex flex-col items-center justify-center p-8 bg-[#f0f0f0] min-h-screen">Carregando perguntas...</div>;
  }

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-[#f0f0f0] rounded-md">
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
      <Typography variant="p" color="text-secondary">Pergunta {currentQuestion.id} de {questions.length}</Typography>
      {isCorrect !== null && <Typography variant="p" color="accent">Pontuação atual: {score}</Typography>}
    </div>
  );
};

export default QuizSection;