import React from 'react';
import NextImage from 'next/image';

interface ImageProps extends React.ComponentProps<typeof NextImage> {
  priority?: boolean; // Adicione a prop priority se necessário
}

const Image: React.FC<ImageProps> = (props) => {
  return <NextImage {...props} />;
};

export default Image;