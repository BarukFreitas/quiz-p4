"use client";

import React from 'react';
import { useRouter, useParams } from 'next/navigation';
import Typography from '../../components/atoms/Typography';
import Button from '../../components/atoms/Button';

interface Params {
  [key: string]: string;
  correct: string;
}

export default function ResultadoPage() {
  const router = useRouter();
  const { correct } = useParams<Params>();
  const isCorrectAll = correct === 'true';

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-[#faa622] min-h-screen">
      <Typography variant="h2" className="mb-4 color-text-secondary">
        {isCorrectAll ? 'Parabéns! Você acertou todas as perguntas!' : 'Resultado do Quiz'}
      </Typography>
      <Typography variant="p" className="mb-4 text-lg">
        {isCorrectAll ? <Typography variant="span" color="accent">Sua pontuação foi perfeita!</Typography> : 'Parabéns! Você completou o quiz.'}
      </Typography>
      <Button onClick={() => router.push('/quiz')}>
        Jogar Novamente
      </Button>
    </div>
  );
};
