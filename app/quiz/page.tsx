// ./app/quiz/page.tsx
"use client";
import React from 'react';
import useGameLogic from '../hooks/useGameLogic';
import { Question } from '../types';
import QuizSection from '../components/organisms/QuizSection';
import ResultsSection from '../components/organisms/ResultsSection';
import { useRouter } from 'next/navigation'; // Import useRouter

// Importe as perguntas do seu arquivo JSON
import questionsData from '../data/questions.json';

const QuizPage: React.FC = () => {
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
      router.push(`/resultado/${finalScore === totalQuestions}`); // Navegação para a página de resultados
    },
  });

  if (!currentQuestion) {
    return <div className="flex justify-center items-center h-full">Carregando quiz...</div>; // Centralizar carregamento
  }

  // Renderiza a seção de resultados quando o quiz termina
  if (currentQuestionIndex === totalQuestions) {
    return <ResultsSection score={score} totalQuestions={totalQuestions} onRestart={() => {
      // Implementar lógica para reiniciar o quiz (resetar estado no hook)
      // Por enquanto, vamos apenas recarregar a página para reiniciar o estado
      router.push('/quiz');
    }} />;
  }

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-[#f0f0f0] min-h-screen"> {/* Fundo cinza claro, altura mínima */}
      <QuizSection
        questions={questionsData as Question[]}
        onAnswerSelect={handleAnswerSelect}
        onNextQuestion={handleNextQuestion}
        currentQuestion={currentQuestion}
      />
    </div>
  );
};

export default QuizPage;