import React from 'react';
import { IconType } from 'react-icons';
import { FaHeart, FaShareAlt } from 'react-icons/fa'; // Exemplo de ícones

interface IconProps {
  name: 'heart' | 'share'; // Adicione outros nomes de ícones conforme necessário
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, className }) => {
  let IconComponent: IconType | undefined;

  switch (name) {
    case 'heart':
      IconComponent = FaHeart;
      break;
    case 'share':
      IconComponent = FaShareAlt;
      break;
    default:
      return null; // Ou outro tratamento de erro
  }

  return IconComponent ? <IconComponent className={className} /> : null;
};

export default Icon;