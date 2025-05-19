import React from 'react';
import { IconType } from 'react-icons';
import { FaHeart, FaShareAlt } from 'react-icons/fa';

interface IconProps {
  name: 'heart' | 'share';
  className?: string;
  color?: string;
  size?: string | number;
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
      return null;
  }

  return IconComponent ? <IconComponent className={className} style={style} /> : null;
};

export default Icon;