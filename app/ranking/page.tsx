import React from 'react';
import RankingList from '../components/organisms/RankingList';

// Dados de ranking de exemplo (você pode implementar lógica para buscar/salvar isso)
const rankingData = [
  { name: 'Jogador 1', score: 5 },
  { name: 'Jogador 2', score: 4 },
  { name: 'Jogador 3', score: 3 },
];

const RankingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h1 className="text-2xl font-bold mb-4">Ranking dos Jogadores</h1>
      <RankingList scores={rankingData} />
    </div>
  );
};

export default RankingPage;