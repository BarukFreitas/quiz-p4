export interface Question {
    id: number;
    image: string;
    options: string[];
    correctAnswer: string;
    characterName: string;
    fullImage: string;
  }
  
  export interface GalleryItemType {
    id: number;
    url: string;
    name: string;
  }
  
  export interface Score {
    name: string;
    score: number;
  }