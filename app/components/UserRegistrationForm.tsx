'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from "next-intl";

import { userRegistrationSchema, UserRegistrationFormData } from '@/lib/validators/userRegistrationSchema';

interface UserRegistrationFormProps {
  onSubmitSuccess: (data: UserRegistrationFormData) => void;
}

export default function UserRegistrationForm({ onSubmitSuccess }: UserRegistrationFormProps) {

  const t = useTranslations("UserRegistrationForm")
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<UserRegistrationFormData>({
    resolver: zodResolver(userRegistrationSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      bio: '',
      agreeToTerms: false,
      userType: 'comum',
    }
  });

  const onSubmit: SubmitHandler<UserRegistrationFormData> = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    onSubmitSuccess(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">{t("fullNameLabel")}</label>
        <input
          type="text"
          id="fullName"
          {...register('fullName')}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"
        />
        {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t("emailLabel")}</label>
        <input
          type="email"
          id="email"
          {...register('email')}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">{t("passwordLabel")}</label>
        <input
          type="password"
          id="password"
          {...register('password')}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"
        />
        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
      </div>

      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">{t("confirmPasswordLabel")}</label>
        <input
          type="password"
          id="confirmPassword"
          {...register('confirmPassword')}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"
        />
        {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
      </div>

      <div>
        <label htmlFor="bio" className="block text-sm font-medium text-gray-700">{t("bioLabel")}</label>
        <textarea
          id="bio"
          {...register('bio')}
          rows={3}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"
        ></textarea>
        {errors.bio && <p className="text-red-500 text-xs mt-1">{errors.bio.message}</p>}
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="agreeToTerms"
          {...register('agreeToTerms')}
          className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
        />
        <label htmlFor="agreeToTerms" className="ml-2 block text-sm text-gray-900">
          {t("termsCheckbox")}
        </label>
      </div>
      {errors.agreeToTerms && <p className="text-red-500 text-xs mt-1">{errors.agreeToTerms.message}</p>}

      <div className="mt-4">
        <span className="block text-sm font-medium text-gray-700 mb-2">{t("userTypeLabel")}</span>
        <div className="flex space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              {...register('userType')}
              value="comum"
              className="form-radio text-indigo-600"
            />
            <span className="ml-2 text-gray-700">{t("commonUser")}</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              {...register('userType')}
              value="premium"
              className="form-radio text-indigo-600"
            />
            <span className="ml-2 text-gray-700">{t("premiumUser")}</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              {...register('userType')}
              value="admin"
              className="form-radio text-indigo-600"
            />
            <span className="ml-2 text-gray-700">{t("adminUser")}</span>
          </label>
        </div>
        {errors.userType && <p className="text-red-500 text-xs mt-1">{errors.userType.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
      >
        {isSubmitting ? t("submittingButton") : t("submitButton")}
      </button>

      {isSubmitSuccessful && (
        <p className="text-green-600 text-sm mt-2 text-center">{t("successMessage")}</p>
      )}
    </form>
  );
}