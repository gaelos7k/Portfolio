import { z } from 'zod'

/**
 * Schema de validação para formulário de contato
 */
export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Nome deve ter no mínimo 2 caracteres')
    .max(100, 'Nome muito longo'),
  
  email: z
    .string()
    .email('Email inválido')
    .toLowerCase(),
  
  message: z
    .string()
    .min(10, 'Mensagem deve ter no mínimo 10 caracteres')
    .max(1000, 'Mensagem muito longa'),
})

/**
 * Type inferido do schema (para TypeScript)
 */
export type ContactFormData = z.infer<typeof contactSchema>

/**
 * Response da API de contato
 */
export interface ContactResponse {
  success: boolean
  message?: string
  error?: string
}
