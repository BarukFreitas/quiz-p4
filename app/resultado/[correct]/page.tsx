"use client";

import React from 'react';
import { useRouter, useParams } from 'next/navigation'; // Import useParams (se você precisar acessar params diretamente aqui)
import Typography from '../../components/atoms/Typography';
import Button from '../../components/atoms/Button';

interface Props {
  params: { correct: string };
}

const ResultadoPage: React.FC<Props> = () => {
  const router = useRouter();
  const { correct } = useParams<{ correct: string }>(); // Use useParams para acessar os parâmetros
  const isCorrectAll = correct === 'true';

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <Typography variant="h2" className="mb-4">
        {isCorrectAll ? 'Parabéns! Você acertou todas as perguntas!' : 'Resultado do Quiz'}
      </Typography>
      <Typography variant="p" className="mb-4 text-lg">
        {isCorrectAll ? 'Sua pontuação foi perfeita!' : 'Você completou o quiz. Veja seu desempenho na página de ranking.'}
      </Typography>
      <Button variant="primary" onClick={() => router.push('/ranking')} className="mb-2">
        Ver Ranking
      </Button>
      <Button onClick={() => router.push('/quiz')}>
        Jogar Novamente
      </Button>
    </div>
  );
};

export default ResultadoPage;