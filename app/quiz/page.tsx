// ./app/quiz/page.tsx
"use client";
import React from 'react';
import useGameLogic from '../hooks/useGameLogic';
import { Question } from '../types';
import QuizSection from '../components/organisms/QuizSection';
import ResultsSection from '../components/organisms/ResultsSection';

// Importe as perguntas do seu arquivo JSON
import questionsData from '../data/questions.json';

const QuizPage: React.FC = () => {
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
      // Aqui você pode redirecionar para a página de resultados
      // Ou atualizar o estado para mostrar a seção de resultados
      console.log('Quiz completo! Pontuação final:', finalScore);
      // Por enquanto, vamos apenas logar. Mais tarde, implementaremos a navegação.
      // Router.push(`/resultado/${finalScore === totalQuestions}`); // Exemplo de navegação
    },
  });

  if (!currentQuestion) {
    return <div>Carregando quiz...</div>;
  }

  // Renderiza a seção de resultados quando o quiz termina (por enquanto, baseado na última pergunta)
  if (currentQuestionIndex === totalQuestions) {
    return <ResultsSection score={score} totalQuestions={totalQuestions} onRestart={() => {
      // Implementar lógica para reiniciar o quiz (resetar estado, índice, etc.)
      console.log('Reiniciar quiz');
    }} />;
  }

  return (
    <div className="flex flex-col items-center justify-center p-8">
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