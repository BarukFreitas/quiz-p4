"use client";

import React from 'react';
import { useRouter, useParams } from 'next/navigation';
import Typography from '@/app/components/atoms/Typography';
import Button from '@/app/components/atoms/Button';
import Image from 'next/image';

import perfeitoGif from '@/public/images/gifs/narukami_dancing.gif'
import zeroGif from '@/public/images/gifs/teddie_loss.gif'

interface Params {
  [key: string]: string;
  score: string;
  total: string;
}

export default function ResultadoPage() {
  const router = useRouter();
  const { score, total } = useParams<Params>();
  const finalScore = parseInt(score);
  const totalQuestions = parseInt(total);
  const isPerfectScore = finalScore === totalQuestions;
  const isZeroScore = finalScore === 0;

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-[#faa622] min-h-screen">
      <Typography variant="h2" className="mb-4 color-text-secondary">
        {isPerfectScore ? 'Parabéns! Você acertou todas as perguntas!' : 'Resultado do Quiz'}
      </Typography>
      {isPerfectScore ? (
        <Image src={perfeitoGif} alt="GIF da tela de pontuação perfeita" width={600} height={600} className="mb-4" />
      ) : isZeroScore ? (
        <Image src={zeroGif} alt="GIF da tela de pontuação zero" width={600} height={600} className="mb-4" />
      ) : (
        <></>
      )}
      <Typography variant="p" className="mb-4 text-lg">
        Sua pontuação: <Typography variant="span" color="text-secondary">{finalScore} / {totalQuestions}</Typography>
      </Typography>
      <Button onClick={() => router.push('/quiz')}>
        Jogar Novamente
      </Button>
      {typeof navigator.share === 'function' && (
        <button
          onClick={() => {
            navigator.share({
              title: 'Resultado do Quiz Persona 4!',
              text: `Eu acertei ${finalScore} de ${totalQuestions} perguntas! Qual sua pontuação?`,
              url: window.location.href,
            });
          }}
          className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Compartilhar Resultado
        </button>
      )}
    </div>
  );
}