import React from 'react';
import Typography from '../../components/atoms/Typography';
import sobreGif from '@/public/images/gifs/chie_dancing.webp'
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function SobrePage() {
  const t = useTranslations("AboutPage");
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-[#faa622] min-h-screen"> 
      <Typography variant="h2" className="mb-4 color-text-secondary">{t("title")}</Typography>
      <Image src={sobreGif} alt={t("gifAlt")} width={600} height={600} className="mb-4" />
      <Typography variant="p" className="mb-4 text-lg text-center color-text-base">
        {t("description")}
      </Typography>
    </div>
  );
};
