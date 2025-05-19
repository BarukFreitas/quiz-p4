import React from 'react';
import Typography from '../atoms/Typography';
import Button from '../atoms/Button';
import Link from 'next/link';

const Homepage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Typography variant="h1" className="text-blue-600 mb-6">Adivinhe o Personagem de Persona 4!</Typography>
      <Typography variant="p" className="text-gray-700 mb-8 text-center">Teste seus conhecimentos sobre os personagens do mundo de Persona 4.</Typography>
      <Link href="/quiz">
        <Button variant="primary">Começar Quiz</Button>
      </Link>
    </div>
  );
};

export default Homepage;