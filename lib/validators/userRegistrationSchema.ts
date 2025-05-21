import { z } from 'zod';

export const userRegistrationSchema = z.object({
    fullName: z.string().min(3, "Seu nome precisa ter pelo menos 3 caracteres").max(100),
    email: z.string().email("Insira um email válido."),
    password: z.string().min(6, "A senha precisa ter pelo menos 6 caracteres.").max(50),
    confirmPassword: z.string(),
    bio: z.string().max(500, "Escreva uma breve descrição sobre você.").optional(),
    agreeToTerms: z.boolean().refine(val => val === true, "Você deve concordar com os termos de uso."),
    userType: z.enum(["comum", "premium", "admin"], {
        errorMap: () => ({ message: "Selecione um tipo de usuário válido."})
    })
}).refine((data) => data.password === data.confirmPassword, {
    message: "As senhas precisam ser iguais.",
    path: ["confirmPassword"]
})

export type UserRegistrationFormData = z.infer<typeof userRegistrationSchema>