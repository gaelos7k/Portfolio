/**
 * Interface para habilidades técnicas
 */
export interface Skill {
  /** Nome da tecnologia/ferramenta */
  name: string
  
  /** Categoria da skill */
  category: 'backend' | 'frontend' | 'tools' | 'devops'
  
  /** Ícone (nome do lucide-react ou URL) */
  icon?: string
  
  /** Experiência (opcional, para ordenação) */
  experience?: 'learning' | 'intermediate' | 'advanced' | 'expert'
}

/**
 * Agrupamento de skills por categoria
 */
export interface SkillGroup {
  category: 'backend' | 'frontend' | 'tools' | 'devops'
  title: string
  skills: Skill[]
}
