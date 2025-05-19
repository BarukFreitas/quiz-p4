import React from 'react';
import ScoreItem from '../molecules/ScoreItem';
import Typography from '../atoms/Typography';
import { Score } from '../../types'; // Importe a interface Score

interface RankingListProps {
  scores: Score[]; // Use a interface importada
}

const RankingList: React.FC<RankingListProps> = ({ scores }) => {
  return (
    <div className="bg-[#ffe52c] rounded-lg shadow-md p-4">
      <Typography variant="h3" className="mb-2 color-text-secondary">Ranking</Typography>
      {scores.length === 0 ? (
        <Typography variant="span" color="text-secondary">Nenhuma pontuação registrada ainda.</Typography>
      ) : (
        <div className="flex flex-col gap-2">
          {scores.map((scoreEntry, index) => (
            <ScoreItem key={index} name={scoreEntry.name} score={scoreEntry.score} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RankingList;