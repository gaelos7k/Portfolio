/**
 * Types para analytics e backend (Supabase)
 */

/**
 * Registro de visita ao portfólio
 */
export interface PageView {
  id?: string
  page: string
  referrer: string | null
  user_agent: string | null
  country: string | null
  created_at?: string
}

/**
 * Conversa do chatbot
 */
export interface ChatConversation {
  id?: string
  session_id: string
  messages: ChatMessage[]
  created_at?: string
  updated_at?: string
}

/**
 * Mensagem individual do chat
 */
export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
  timestamp: string
}

/**
 * Request para API do chatbot
 */
export interface ChatRequest {
  message: string
  session_id?: string
}

/**
 * Response da API do chatbot
 */
export interface ChatResponse {
  message: string
  session_id: string
  error?: string
}
