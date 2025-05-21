// ./components/layout/Header.tsx
import React from 'react';
import Link from 'next/link';
import Typography from '../atoms/Typography';
import Logo from '@/public/images/logo.png';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-[#ffe52c] py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold text-black">
          Quiz Persona 4
        </Link>
        <Image src={Logo} alt="Logo da tela inicial" width={50} height={50} />
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
            <li>
              <Link href="/form" className="hover:text-[#faa622] transition duration-200">
                <Typography variant="span">Form</Typography>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};