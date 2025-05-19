import React from 'react';
import Typography from '../components/atoms/Typography';

const SobrePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-[#faa622] min-h-screen"> {/* Fundo cinza claro, altura mínima */}
      <Typography variant="h2" className="mb-4 color-text-secondary">Sobre o Quiz de Persona 4</Typography> {/* Título cinza escuro */}
      <Typography variant="p" className="mb-4 text-lg text-center color-text-base">
        Este é um quiz simples criado para testar seus conhecimentos sobre os personagens do amado jogo Persona 4. Divirta-se tentando adivinhar todos eles!
      </Typography>
    </div>
  );
};

export default SobrePage;