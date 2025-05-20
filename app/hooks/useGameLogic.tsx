"use client";
import { useState, useEffect } from 'react';
import { Question } from '../types';
import { useRouter } from 'next/navigation'; // Importe o useRouter

interface UseGameLogicProps {
  questions: Question[];
}

export default function useGameLogic ({ questions }: UseGameLogicProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<Question | undefined>(questions[0]);
  const router = useRouter(); // Inicialize o router

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    setIsCorrect(answer === currentQuestion?.correctAnswer);
  };

  const handleNextQuestion = () => {
    let finalScore = score; // Crie uma variável para a pontuação final

    if (isCorrect) {
      finalScore = score + 1; // Incrementa a pontuação ANTES da navegação
    }

    setSelectedAnswer(null);
    setIsCorrect(null);
    const nextIndex = currentQuestionIndex + 1;

    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
      setCurrentQuestion(questions[nextIndex]);
      setScore(finalScore); // Atualiza o estado da pontuação para a próxima pergunta (se houver)
    } else {
      // Navegue para a página de resultados com a pontuação FINAL
      router.push(`/resultado/${finalScore}/${questions.length}`);
    }
  };

  useEffect(() => {
    setCurrentQuestion(questions[currentQuestionIndex]);
  }, [currentQuestionIndex, questions]);

  return {
    currentQuestion,
    selectedAnswer,
    isCorrect,
    score: score, // Retorna o estado da pontuação atualizado
    handleAnswerSelect,
    handleNextQuestion,
    currentQuestionIndex,
    totalQuestions: questions.length,
  };
};