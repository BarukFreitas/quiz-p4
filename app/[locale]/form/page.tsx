"use client";

import UserRegistrationForm from "../../components/UserRegistrationForm";
import { UserRegistrationFormData } from "@/lib/validators/userRegistrationSchema";
import { useTranslations } from "next-intl";

export default function FormPage() {

  const t = useTranslations("FormPage")

  const handleFormSubmit = (data: UserRegistrationFormData) => {
    alert(t("successMessage"));
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          {t("pageTitle")}
        </h1>
        <UserRegistrationForm onSubmitSuccess={handleFormSubmit} />
      </div>
    </div>
  );
}
