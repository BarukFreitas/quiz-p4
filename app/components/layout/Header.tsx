import React from 'react';
import Link from 'next/link';
import Typography from '../atoms/Typography';
import Logo from '@/public/images/logo.png';
import Image from 'next/image';
import { useTranslations } from "next-intl";


export default function Header() {
    const t = useTranslations("Header")
  
  return (
    <header className="bg-[#ffe52c] py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold text-black">
          {t("quizTitle")}
        </Link>
        <Image src={Logo} alt="Logo da tela inicial" width={50} height={50} />
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-[#faa622] transition duration-200">
                <Typography variant="span">{t("homeLink")}</Typography>
              </Link>
            </li>
            <li>
              <Link href="/galeria" className="hover:text-[#faa622] transition duration-200">
                <Typography variant="span">{t("galleryLink")}</Typography>
              </Link>
            </li>
            <li>
              <Link href="/sobre" className="hover:text-[#faa622] transition duration-200">
                <Typography variant="span">{t("aboutLink")}</Typography>
              </Link>
            </li>
            <li>
              <Link href="/form" className="hover:text-[#faa622] transition duration-200">
                <Typography variant="span">{t("formLink")}</Typography>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};