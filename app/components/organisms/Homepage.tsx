// ./app/components/organisms/Homepage.tsx
import React from 'react';
import Typography from '../atoms/Typography';
import Button from '../atoms/Button';
import Link from 'next/link';
import Image from 'next/image'; // Importe o componente Image do Next.js
import homeGif from '../../../public/images/gifs/teddie_dancing.webp'; // Ajuste o caminho conforme a localização do seu GIF

const Homepage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#faa622]">
      <Typography variant="h1" color="text-secondary" className="mb-6">Adivinhe o Personagem de Persona 4!</Typography>
      <Typography variant="p" className="text-gray-700 mb-8 text-center">Teste seus conhecimentos sobre os personagens do mundo de Persona 4.</Typography>
      <Image src={homeGif} alt="GIF da tela inicial" width={600} height={600} className="mb-4" />
      <Link href="/quiz">
        <Button variant="primary">Começar Quiz</Button>
      </Link>
    </div>
  );
};

export default Homepage;