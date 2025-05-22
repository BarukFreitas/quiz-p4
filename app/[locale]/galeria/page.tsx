'use client'; // Mantenha esta diretiva

import React from 'react';
import { ImageProvider } from '../../contexts/ImageContext';
import GalleryGrid from '../../components/organisms/GalleryGrid';

export default function GaleriaPage() {
  return (
    <ImageProvider>
      <div className="p-8 bg-[#f0f0f0] min-h-screen">
        <h2 className="text-2xl font-bold mb-4 color-text-secondary text-center">Galeria de Persona 4</h2>
        <GalleryGrid />
      </div>
    </ImageProvider>
  );
}