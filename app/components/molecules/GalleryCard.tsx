'use client';

import React from 'react';
import Image from '../atoms/Image';
import Icon from '../atoms/Icon'; 
import Typography from '../atoms/Typography'; 

import { GalleryItemType } from '@/app/types';
import { useImageContext } from '../../contexts/ImageContext';

interface GalleryCardProps {
  item: GalleryItemType;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ item }) => {
  const { favoriteImageIds, toggleFavorite, shareImage } = useImageContext();
  const isFavorite = favoriteImageIds.includes(item.id);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
      <div className="relative w-full h-64 rounded-md overflow-hidden mb-2">
        <Image 
          src={item.url} 
          alt={item.name} 
          layout="fill"       
          objectFit="contain" 
          priority={false} 
        />
      </div>
      
      <Typography variant="p" className="text-center mb-2">{item.name}</Typography>
      
      <div className="flex gap-2">
        <button
          onClick={() => toggleFavorite(item.id)}
          className="p-2 rounded-full hover:bg-gray-100"
          aria-label={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
        >
          <Icon name="heart" color={isFavorite ? '#c22303' : '#718096'} size={20} />
        </button>

        <button
          onClick={() => shareImage(item.url, item.name)}
          className="p-2 rounded-full hover:bg-gray-100"
          aria-label="Compartilhar imagem"
        >
          <Icon name="share" color="#7fe6ef" size={20} />
        </button>
      </div>
    </div>
  );
};

export default GalleryCard;