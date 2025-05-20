'use client'; 

import React from 'react';
import { useImageContext } from '../../contexts/ImageContext'; 
import GalleryCard from '../molecules/GalleryCard'; 

const GalleryGrid: React.FC = () => {
  const { images } = useImageContext(); 

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.length > 0 ? (
        images.map((item) => (
          <GalleryCard key={item.id} item={item} />
        ))
      ) : (
        <p>Carregando imagens...</p>
      )}
    </div>
  );
};

export default GalleryGrid;