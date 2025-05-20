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
    let finalScore = score;

    if (isCorrect) {
      finalScore = score + 1;
    }

    setSelectedAnswer(null);
    setIsCorrect(null);
    const nextIndex = currentQuestionIndex + 1;

    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
      setCurrentQuestion(questions[nextIndex]);
      setScore(finalScore);
    } else {
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
    score: score,
    handleAnswerSelect,
    handleNextQuestion,
    currentQuestionIndex,
    totalQuestions: questions.length,
  };
};