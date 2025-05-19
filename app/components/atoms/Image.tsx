import React from 'react';
import NextImage from 'next/image';

const Image: React.FC<React.ComponentProps<typeof NextImage>> = (props) => {
  return <NextImage {...props} />;
};

export default Image;