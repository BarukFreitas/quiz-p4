"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaHeart } from 'react-icons/fa';

import chie from '../../public/images/gallery/persona4/chie.webp';
import kanji from '../../public/images/gallery/persona4/kanji.webp';
import naoto from '../../public/images/gallery/persona4/naoto.webp';
import rise from '../../public/images/gallery/persona4/rise.webp';
import teddie from '../../public/images/gallery/persona4/teddie.webp';
import yukiko from '../../public/images/gallery/persona4/yukiko.webp';
import yosuke from '../../public/images/gallery/persona4/yosuke.webp';

const galleryItems = [
  { id: 'chie', src: chie, alt: 'Chie Satonaka' },
  { id: 'kanji', src: kanji, alt: 'Kanji Tatsumi' },
  { id: 'naoto', src: naoto, alt: 'Naoto Shirogane' },
  { id: 'rise', src: rise, alt: 'Rise Kujikawa' },
  { id: 'teddie', src: teddie, alt: 'Teddie' },
  { id: 'yukiko', src: yukiko, alt: 'Yukiko Amagi' },
  { id: 'yosuke', src: yosuke, alt: 'Yosuke Hanamura' },
];

export default function GaleriaPage() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('persona4_favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('persona4_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <div className="p-8 bg-[#f0f0f0] min-h-screen">
      <h2 className="text-2xl font-bold mb-4 color-text-secondary text-center">Galeria de Persona 4</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {galleryItems.map((item) => (
          <div key={item.id} className="relative h-96 border border-gray-300 rounded-lg p-4 bg-white flex flex-col items-center">
            <div className="relative w-full h-2/3 rounded-md overflow-hidden mb-2">
              <Image src={item.src} alt={item.alt} layout="fill" objectFit="contain" />
              <button
                onClick={() => toggleFavorite(item.id)}
                className={`absolute top-2 right-2 p-2 rounded-full text-xl ${
                  favorites.includes(item.id) ? 'text-red-500 bg-red-100/50' : 'text-gray-400 bg-gray-100/50'
                }`}
                aria-label={favorites.includes(item.id) ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
              >
                <FaHeart />
              </button>
            </div>
            <p className="text-center text-gray-700">{item.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}