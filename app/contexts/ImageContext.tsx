'use client';

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { GalleryItemType } from '@/app/types';

interface ImageContextType {
  images: GalleryItemType[];
  favoriteImageIds: number[];
  toggleFavorite: (imageId: number) => void;
  shareImage: (imageUrl: string, imageTitle: string) => void;
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

const getStoredFavorites = (): number[] => {
  if (typeof window === 'undefined') return [];
  try {
    const favorites = localStorage.getItem('persona4_image_favorites');
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error("Erro ao carregar favoritos do localStorage:", error);
    return [];
  }
};

const setStoredFavorites = (favorites: number[]) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem('persona4_image_favorites', JSON.stringify(favorites));
  } catch (error) {
    console.error("Erro ao salvar favoritos no localStorage:", error);
  }
};

interface ImageProviderProps {
  children: ReactNode;
}

export const ImageProvider = ({ children }: ImageProviderProps) => {
  const [images, setImages] = useState<GalleryItemType[]>([]);
  const [favoriteImageIds, setFavoriteImageIds] = useState<number[]>([]);

  useEffect(() => {
    setFavoriteImageIds(getStoredFavorites());
  }, []);

  useEffect(() => {
    const mockImages: GalleryItemType[] = [
        { id: 1, url: '/images/gallery/persona4/chie.webp', name: 'Chie Satonaka' },
        { id: 2, url: '/images/gallery/persona4/kanji.webp', name: 'Kanji Tatsumi' },
        { id: 3, url: '/images/gallery/persona4/naoto.webp', name: 'Naoto Shirogane' },
        { id: 4, url: '/images/gallery/persona4/rise.webp', name: 'Rise Kujikawa' },
        { id: 5, url: '/images/gallery/persona4/teddie.webp', name: 'Teddie' },
        { id: 6, url: '/images/gallery/persona4/yosuke.webp', name: 'Yosuke Hanamura' },
        { id: 7, url: '/images/gallery/persona4/yukiko.webp', name: 'Yukiko Amagi' },
      ];
    setImages(mockImages);
  }, []);

  useEffect(() => {
    setStoredFavorites(favoriteImageIds);
  }, [favoriteImageIds]);

  const toggleFavorite = (imageId: number) => {
    setFavoriteImageIds((prevFavorites) => {
      if (prevFavorites.includes(imageId)) {
        return prevFavorites.filter((id) => id !== imageId);
      } else {
        return [...prevFavorites, imageId];
      }
    });
  };

  const shareImage = async (imageUrl: string, imageTitle: string) => {
    const fullImageUrl = window.location.origin + imageUrl;

    if (typeof window !== 'undefined' && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(fullImageUrl);
        alert('Link da imagem copiado para a área de transferência!');
      } catch (error) {
        console.error('Erro ao copiar link para a área de transferência:', error);
        alert('Não foi possível copiar o link. Por favor, copie manualmente: ' + fullImageUrl);
      }
    } else {
      prompt('Para compartilhar, copie este link (Ctrl+C ou Cmd+C):', fullImageUrl);
    }
  };

  const contextValue: ImageContextType = {
    images,
    favoriteImageIds,
    toggleFavorite,
    shareImage,
  };

  return (
    <ImageContext.Provider value={contextValue}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImageContext = () => {
  const context = useContext(ImageContext);
  if (context === undefined) {
    throw new Error('useImageContext must be used within an ImageProvider');
  }
  return context;
};