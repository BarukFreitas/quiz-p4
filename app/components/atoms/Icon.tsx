import React from 'react';
import { IconType } from 'react-icons';
import { FaHeart, FaShareAlt } from 'react-icons/fa'; // Exemplo de ícones

interface IconProps {
  name: 'heart' | 'share'; // Adicione outros nomes de ícones conforme necessário
  className?: string;
  color?: string; // Adicione a prop para controlar a cor
  size?: string | number; // Adicione a prop para controlar o tamanho
}

const Icon: React.FC<IconProps> = ({ name, className, color, size }) => {
  let IconComponent: IconType | undefined;
  const style = {
    color: color,
    fontSize: typeof size === 'number' ? `${size}px` : size,
  };

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

  return IconComponent ? <IconComponent className={className} style={style} /> : null;
};

export default Icon;