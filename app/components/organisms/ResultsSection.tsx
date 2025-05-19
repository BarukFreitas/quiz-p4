"use client";

import React from 'react';
import Typography from '../atoms/Typography';
import Button from '../atoms/Button';
import { useRouter } from 'next/navigation';

interface ResultsSectionProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void; // Adicione esta linha!
}

const ResultsSection: React.FC<ResultsSectionProps> = ({ score, totalQuestions, onRestart }) => {
  const router = useRouter();

  const handleSaveScore = () => {
    const playerName = prompt('Digite seu nome para o ranking:', 'Jogador Anônimo');
    if (playerName) {
      const rankingData = localStorage.getItem('quizRanking');
      const ranking: { name: string; score: number }[] = rankingData ? JSON.parse(rankingData) : [];
      ranking.push({ name: playerName, score: score });
      ranking.sort((a, b) => b.score - a.score);
      const rankingString = JSON.stringify(ranking);
      localStorage.setItem('quizRanking', rankingString);
      console.log('Dados salvos no localStorage:', rankingString); // Adicione este log
      router.push('/ranking');
    }
  };

  const handleRestart = () => {
    onRestart(); // Chame a função onRestart passada como prop!
  };

  return (
    <div className="bg-[#ffe52c] rounded-lg shadow-md p-6 flex flex-col items-center gap-4">
      <Typography variant="h2" className="text-center mb-4 color-text-secondary">Resultado do Quiz!</Typography>
      <Typography variant="p" className="text-lg font-semibold">Sua pontuação: <Typography variant="span" color="accent">{score}</Typography> de {totalQuestions}</Typography>
      <div className="mt-4 flex gap-2">
        <Button onClick={handleSaveScore} variant="secondary">Salvar Pontuação</Button>
        <Button onClick={handleRestart} variant="primary">Jogar Novamente</Button>
      </div>
    </div>
  );
};

export default ResultsSection;