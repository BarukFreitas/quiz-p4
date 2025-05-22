// ./app/components/organisms/Homepage.tsx
import React from 'react';
import Typography from '../atoms/Typography';
import Button from '../atoms/Button';
import Link from 'next/link';
import Image from 'next/image';
import homeGif from '../../../public/images/gifs/teddie_dancing.webp';
import Logo from '@/public/images/logo.png';
import { useTranslations } from 'next-intl';

export default function Homepage() {
  const t = useTranslations("Homepage");
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#faa622]">
      <Image src={Logo} alt={t("logoAlt")} width={300} height={300} />
      <Typography variant="h1" color="text-secondary" className="mb-6">{t("title")}</Typography>
      <Typography variant="p" className="text-gray-700 mb-8 text-center">{t("description")}</Typography>
      <Image src={homeGif} alt={t("gifAlt")} width={600} height={600} className="mb-4" />
      <Link href="/quiz">
        <Button variant="primary">{t("startButton")}</Button>
      </Link>
    </div>
  );
};

