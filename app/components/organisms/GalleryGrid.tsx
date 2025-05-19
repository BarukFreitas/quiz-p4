import React from 'react';
import GalleryCard from '../molecules/GalleryCard';
import { GalleryItemType } from '../../types'; // Importe a interface GalleryItemType

interface GalleryGridProps {
  items: GalleryItemType[];
  onFavorite: (id: number) => void;
  onShare: (url: string) => void;
  favoriteItems: number[];
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ items, onFavorite, onShare, favoriteItems }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-[#7fe6ef] rounded-md"> {/* Fundo azul claro */}
      {items.map((item) => (
        <GalleryCard
          key={item.id}
          image={item.url}
          characterName={item.name}
          onFavorite={() => onFavorite(item.id)}
          onShare={() => onShare(item.url)}
          isFavorite={favoriteItems.includes(item.id)}
        />
      ))}
    </div>
  );
};

export default GalleryGrid;