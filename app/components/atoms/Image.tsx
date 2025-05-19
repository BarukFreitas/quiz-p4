import React from 'react';
import NextImage from 'next/image';

interface ImageProps extends React.ComponentProps<typeof NextImage> {}

const Image: React.FC<ImageProps> = (props) => {
  return <NextImage {...props} />;
};

export default Image;