// ./components/layout/Footer.tsx
import React from 'react';
import Typography from '../atoms/Typography';
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer")
  return (
    <footer className="bg-[#ffe52c] py-8 text-center text-gray-600 border-t border-gray-300">
      <div>
        <Typography variant="p" className="mb-2">
          {t("p")}
        </Typography>
        <Typography variant="span" className="text-gray-500">
          {t("span")}
        </Typography>
      </div>
    </footer>
  );
};
