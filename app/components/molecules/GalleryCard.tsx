import React from 'react';
import Image from '../atoms/Image';
import Icon from '../atoms/Icon';
import Typography from '../atoms/Typography';

interface GalleryCardProps {
  image: string;
  characterName: string;
  onFavorite: () => void;
  onShare: () => void;
  isFavorite?: boolean;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ image, characterName, onFavorite, onShare, isFavorite }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
      <Image src={image} alt={characterName} width={100} height={100} className="mb-2 object-cover rounded-md" />
      <Typography variant="p" className="text-center mb-2">{characterName}</Typography>
      <div className="flex gap-2">
        <button onClick={onFavorite} className="p-2 rounded-full hover:bg-gray-100">
          <Icon name="heart" className={isFavorite ? 'text-red-500' : 'text-gray-400'} />
        </button>
        <button onClick={onShare} className="p-2 rounded-full hover:bg-gray-100">
          <Icon name="share" className="text-blue-500" />
        </button>
      </div>
    </div>
  );
};

export default GalleryCard;