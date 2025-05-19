"use client";
import { useState, useEffect } from 'react';
import { Question } from '../types'; // Importe a interface Question

interface UseGameLogicProps {
  questions: Question[];
  onQuizComplete: (score: number) => void;
}

const useGameLogic = ({ questions, onQuizComplete }: UseGameLogicProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<Question | undefined>(questions[0]);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    setIsCorrect(answer === currentQuestion?.correctAnswer);
  };

  const handleNextQuestion = () => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
    setSelectedAnswer(null);
    setIsCorrect(null);
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
      setCurrentQuestion(questions[nextIndex]);
    } else {
      onQuizComplete(score);
    }
  };

  useEffect(() => {
    setCurrentQuestion(questions[currentQuestionIndex]);
  }, [currentQuestionIndex, questions]);

  return {
    currentQuestion,
    selectedAnswer,
    isCorrect,
    score,
    handleAnswerSelect,
    handleNextQuestion,
    currentQuestionIndex,
    totalQuestions: questions.length,
  };
};

export default useGameLogic;