import React from 'react';
import Typography from '../atoms/Typography';
import Button from '../atoms/Button';
import Link from 'next/link';

const Homepage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#faa622]"> {/* Fundo amarelo */}
      <Typography variant="h1" color="text-secondary" className="mb-6">Adivinhe o Personagem de Persona 4!</Typography> {/* Texto cinza escuro */}
      <Typography variant="p" className="text-gray-700 mb-8 text-center">Teste seus conhecimentos sobre os personagens do mundo de Persona 4.</Typography>
      <Link href="/quiz">
        <Button variant="primary">Começar Quiz</Button> {/* Botão primário (amarelo) */}
      </Link>
    </div>
  );
};

export default Homepage;