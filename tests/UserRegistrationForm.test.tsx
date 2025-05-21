import React from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import UserRegistrationForm from "@/app/components/UserRegistrationForm";

const mockOnSubmitSuccess = jest.fn();

describe('UserRegistrationForm', () => {
    beforeEach(() => {
        mockOnSubmitSuccess.mockClear();
    });

    test('Deve renderizar todos os campos do formulário e botões', () => {
        render(<UserRegistrationForm onSubmitSuccess={mockOnSubmitSuccess} />);

        expect(screen.getByLabelText(/Nome Completo/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/^Senha$/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Confirmar Senha/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Biografia/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Concordo com os Termos de Serviço/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Usuário Comum/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Usuário Premium/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Administrador/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Cadastrar/i })).toBeInTheDocument();

        expect(screen.queryByText(/Seu nome precisa ter pelo menos 3 caracteres/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/Insira um email válido/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/A senha precisa ter pelo menos 6 caracteres/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/As senhas precisam ser iguais/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/Você deve concordar com os termos de uso/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/Selecione um tipo de usuário válido/i)).not.toBeInTheDocument();
    });

    test('Deve enviar o formulário com sucesso com dados válidos', async () => {
        render(<UserRegistrationForm onSubmitSuccess={mockOnSubmitSuccess} />);
  
        fireEvent.change(screen.getByLabelText(/Nome Completo/i), { target: { value: 'Maria Oliveira' } });
        fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'maria@example.com' } });
        fireEvent.change(screen.getByLabelText(/^Senha$/i), { target: { value: 'minhasenha123' } });
        fireEvent.change(screen.getByLabelText(/Confirmar Senha/i), { target: { value: 'minhasenha123' } });
        fireEvent.change(screen.getByLabelText(/Biografia/i), { target: { value: 'Sou desenvolvedora web.' } });
        fireEvent.click(screen.getByLabelText(/Concordo com os Termos de Serviço/i));
        fireEvent.click(screen.getByLabelText(/Usuário Premium/i));
  
        fireEvent.click(screen.getByRole('button', { name: /Cadastrar/i }));
  
        await waitFor(() => {
          expect(screen.getByRole('button', { name: /Enviando.../i })).toBeDisabled();
        }, { timeout: 1000 });
  
        await waitFor(() => {
          expect(mockOnSubmitSuccess).toHaveBeenCalledTimes(1);
          expect(mockOnSubmitSuccess).toHaveBeenCalledWith(expect.objectContaining({
            fullName: 'Maria Oliveira',
            email: 'maria@example.com',
            userType: 'premium',
          }));
          expect(screen.getByText(/Cadastro realizado com sucesso!/i)).toBeInTheDocument();
        }, { timeout: 2000 });
      });

    test('Deve exibir mensagens de erro para campos obrigatórios vazios ou inválidos', async () => {
        render(<UserRegistrationForm onSubmitSuccess={mockOnSubmitSuccess} />);
  
        fireEvent.click(screen.getByRole('button', { name: /Cadastrar/i }));
  
        await waitFor(() => {
          expect(screen.getByText(/Seu nome precisa ter pelo menos 3 caracteres/i)).toBeInTheDocument();
          expect(screen.getByText(/Insira um email válido/i)).toBeInTheDocument();
          expect(screen.getByText(/A senha precisa ter pelo menos 6 caracteres/i)).toBeInTheDocument(); 
          expect(screen.getByText(/Você deve concordar com os termos de uso/i)).toBeInTheDocument(); 
        });
  
        const emailInput = screen.getByLabelText(/Email/i);
        fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
        fireEvent.blur(emailInput);
  
        await waitFor(() => {
          expect(screen.getByText(/Insira um email válido/i)).toBeInTheDocument();
        });
    });
  

    test('Deve exibir erro se as senhas não forem iguais', async () => {
      render(<UserRegistrationForm onSubmitSuccess={mockOnSubmitSuccess} />);

      fireEvent.change(screen.getByLabelText(/Nome Completo/i), { target: { value: 'João da Silva' } });
      fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'joao@example.com' } });
      fireEvent.change(screen.getByLabelText(/^Senha$/i), { target: { value: 'senha123' } });
      fireEvent.change(screen.getByLabelText(/Confirmar Senha/i), { target: { value: 'senha456' } });

      fireEvent.click(screen.getByLabelText(/Concordo com os Termos de Serviço/i));
      fireEvent.click(screen.getByLabelText(/Usuário Comum/i));

      fireEvent.click(screen.getByRole('button', { name: /Cadastrar/i }));

      await waitFor(() => {
        expect(screen.getByText(/As senhas precisam ser iguais/i)).toBeInTheDocument(); // CORRIGIDO AQUI
        expect(mockOnSubmitSuccess).not.toHaveBeenCalled();
      });
    });

    test('Deve resetar o formulário após envio bem-sucedido', async () => {
      render(<UserRegistrationForm onSubmitSuccess={mockOnSubmitSuccess} />);

      fireEvent.change(screen.getByLabelText(/Nome Completo/i), { target: { value: 'Pedro Almeida' } });
      fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'pedro@example.com' } });
      fireEvent.change(screen.getByLabelText(/^Senha$/i), { target: { value: 'minhasenha123' } });
      fireEvent.change(screen.getByLabelText(/Confirmar Senha/i), { target: { value: 'minhasenha123' } });
      fireEvent.click(screen.getByLabelText(/Concordo com os Termos de Serviço/i));
      fireEvent.click(screen.getByLabelText(/Administrador/i));

      fireEvent.click(screen.getByRole('button', { name: /Cadastrar/i }));

      await waitFor(() => {
        expect(mockOnSubmitSuccess).toHaveBeenCalledTimes(1);
        expect(screen.getByLabelText(/Nome Completo/i)).toHaveValue('');
        expect(screen.getByLabelText(/Email/i)).toHaveValue('');
        expect(screen.getByLabelText(/^Senha$/i)).toHaveValue('');
        expect(screen.getByLabelText(/Confirmar Senha/i)).toHaveValue('');
        expect(screen.getByLabelText(/Biografia/i)).toHaveValue('');
        expect(screen.getByLabelText(/Concordo com os Termos de Serviço/i)).not.toBeChecked();
        expect(screen.getByLabelText(/Usuário Comum/i)).toBeChecked();
      }, { timeout: 2000 });
    });
});