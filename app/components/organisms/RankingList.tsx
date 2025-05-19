import React from 'react';
import ScoreItem from '../molecules/ScoreItem';
import Typography from '../atoms/Typography';

interface RankingListProps {
  scores: { name: string; score: number }[];
}

const RankingList: React.FC<RankingListProps> = ({ scores }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <Typography variant="h3" className="mb-2">Ranking</Typography>
      {scores.length === 0 ? (
        <Typography variant="span">Nenhuma pontuação registrada ainda.</Typography>
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