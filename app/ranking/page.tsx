"use client";

import React, { useState, useEffect } from 'react';
import RankingList from '../components/organisms/RankingList';
import Typography from '../components/atoms/Typography';

interface ScoreEntry {
  name: string;
  score: number;
}

const RankingPage: React.FC = () => {
  const [rankingData, setRankingData] = useState<ScoreEntry[]>([]);

  useEffect(() => {
    const storedRanking = localStorage.getItem('quizRanking');
    if (storedRanking) {
      const parsedRanking = JSON.parse(storedRanking) as ScoreEntry[];
      // Ordenar o ranking por pontuação decrescente ao carregar
      parsedRanking.sort((a, b) => b.score - a.score);
      setRankingData(parsedRanking);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-[#faa622] min-h-screen"> {/* Fundo laranja */}
      <Typography variant="h1" className="text-2xl font-bold mb-4 color-text-secondary">Ranking dos Jogadores</Typography> {/* Título cinza escuro */}
      <RankingList scores={rankingData} />
      {rankingData.length === 0 && (
        <Typography variant="p" className="mt-4 text-gray-600">Nenhuma pontuação salva ainda.</Typography>
      )}
    </div>
  );
};

export default RankingPage;