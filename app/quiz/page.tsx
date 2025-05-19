// ./app/quiz/page.tsx
"use client";
import React from 'react';
import useGameLogic from '../hooks/useGameLogic';
import { Question } from '../types';
import QuizSection from '../components/organisms/QuizSection';
import ResultsSection from '../components/organisms/ResultsSection';
import { useRouter } from 'next/navigation';

import questionsData from '../data/questions.json';

export default function QuizPage() {
  const router = useRouter();
  const {
    currentQuestion,
    handleAnswerSelect,
    handleNextQuestion,
    currentQuestionIndex,
    totalQuestions,
    score,
  } = useGameLogic({
    questions: questionsData as Question[],
    onQuizComplete: (finalScore) => {
      router.push(`/resultado/${finalScore === totalQuestions}`);
    },
  });

  if (!currentQuestion) {
    return <div className="flex justify-center items-center h-full">Carregando quiz...</div>;
  }

  if (currentQuestionIndex === totalQuestions) {
    return <ResultsSection score={score} totalQuestions={totalQuestions} onRestart={() => {
      router.push('/quiz');
    }} />;
  }

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-[#f0f0f0] min-h-screen"> 
      <QuizSection
        questions={questionsData as Question[]}
        onAnswerSelect={handleAnswerSelect}
        onNextQuestion={handleNextQuestion}
        currentQuestion={currentQuestion}
      />
    </div>
  );
};
