import React from 'react';
import Image from '../atoms/Image';
import Button from '../atoms/Button';

interface QuestionCardProps {
  image: string;
  options: string[];
  onSelect: (answer: string) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ image, options, onSelect }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
      <Image src={image} alt="Pergunta" width={200} height={200} className="mb-4 object-contain rounded-md" />
      <div className="grid grid-cols-2 gap-4">
        {options.map((option) => (
          <Button key={option} onClick={() => onSelect(option)} className="w-full">
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;