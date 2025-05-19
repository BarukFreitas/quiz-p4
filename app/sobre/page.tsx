import React from 'react';
import Typography from '../components/atoms/Typography';

const SobrePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <Typography variant="h2" className="mb-4">Sobre o Quiz de Persona 4</Typography>
      <Typography variant="p" className="mb-4 text-lg text-center">
        Este é um quiz simples criado para testar seus conhecimentos sobre os personagens do amado jogo Persona 4. Divirta-se tentando adivinhar todos eles!
      </Typography>
      <Typography variant="p" className="text-center text-gray-600">
        Criado com React, Next.js e Tailwind CSS.
      </Typography>
    </div>
  );
};

export default SobrePage;