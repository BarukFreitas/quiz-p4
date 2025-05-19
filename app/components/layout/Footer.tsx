// ./components/layout/Footer.tsx
import React from 'react';
import Link from 'next/link';
import Typography from '../atoms/Typography';

export default function Footer() {
  return (
    <footer className="bg-[#ffe52c] py-8 text-center text-gray-600 border-t border-gray-300">
      <div>
        <Typography variant="p" className="mb-2">
          Quiz Persona 4 - Desenvolvido por Baruk Freitas
        </Typography>
        <Typography variant="span" className="text-gray-500">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </Typography>
      </div>
    </footer>
  );
};
