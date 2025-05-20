// ./app/quiz/page.tsx
"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import useGameLogic from '../hooks/useGameLogic';
import { Question } from '../types';
import QuizSection from '../components/organisms/QuizSection';

// Importe seus dados de perguntas
import questionsData from '../data/questions.json';

export default function QuizPage() {
  const router = useRouter();
  const {
    currentQuestion,
    handleAnswerSelect,
    handleNextQuestion,
  } = useGameLogic({
    questions: questionsData as Question[],
  });

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-[#f0f0f0] min-h-screen">
      {currentQuestion && (
        <QuizSection
          questions={questionsData as Question[]}
          onAnswerSelect={handleAnswerSelect}
          onNextQuestion={handleNextQuestion}
          currentQuestion={currentQuestion}
        />
      )}
    </div>
  );
}