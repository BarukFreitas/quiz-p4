// ./components/layout/Header.tsx
import React from 'react';
import Link from 'next/link';
import Typography from '../atoms/Typography';

export default function Header() {
  return (
    <header className="bg-[#ffe52c] py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold text-black">
          Quiz Persona 4
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-[#faa622] transition duration-200">
                <Typography variant="span">Home</Typography>
              </Link>
            </li>
            <li>
              <Link href="/galeria" className="hover:text-[#faa622] transition duration-200">
                <Typography variant="span">Galeria</Typography>
              </Link>
            </li>
            <li>
              <Link href="/sobre" className="hover:text-[#faa622] transition duration-200">
                <Typography variant="span">Sobre</Typography>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};