"use client";
import React, { useState, useEffect } from 'react';
import QuestionCard from '../molecules/QuestionCard';
import AnswerFeedback from '../molecules/AnswerFeedback';
import { Question } from '../../types'; // Importe a interface Question

interface QuizSectionProps {
  questions: Question[];
  onQuizComplete: (score: number) => void;
}

const QuizSection: React.FC<QuizSectionProps> = ({ questions, onQuizComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    setIsCorrect(answer === currentQuestion.correctAnswer);
  };

  const handleNextQuestion = () => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
    setSelectedAnswer(null);
    setIsCorrect(null);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      onQuizComplete(score);
    }
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
          onSelect={handleAnswerSelect}
        />
      ) : (
        <AnswerFeedback
          isCorrect={isCorrect}
          correctAnswer={currentQuestion.correctAnswer}
          characterName={currentQuestion.characterName}
          fullImage={currentQuestion.fullImage}
          onNext={handleNextQuestion}
        />
      )}
      <p className="text-gray-600">Pergunta {currentQuestionIndex + 1} de {questions.length}</p>
      {isCorrect !== null && <p className="text-blue-500">Pontuação atual: {score}</p>}
    </div>
  );
};

export default QuizSection;