"use client";

import UserRegistrationForm from "../components/UserRegistrationForm";
import { UserRegistrationFormData } from "@/lib/validators/userRegistrationSchema";

export default function FormPage() {
  const handleFormSubmit = (data: UserRegistrationFormData) => {
    console.log("🥳 Dados do formulário recebidos na página:", data);
    alert(
      "Cadastro de usuário concluído!"
    );
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Crie Sua Conta
        </h1>
        <UserRegistrationForm onSubmitSuccess={handleFormSubmit} />
      </div>
    </div>
  );
}
