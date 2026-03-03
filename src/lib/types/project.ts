/**
 * Interface para projetos do portfólio
 */
export interface Project {
  /** ID único do projeto (slug) */
  id: string
  
  /** Título do projeto */
  title: string
  
  /** Descrição curta (para cards) */
  description: string
  
  /** Descrição detalhada (opcional, para modal/página) */
  longDescription?: string
  
  /** Tecnologias utilizadas */
  tech: string[]
  
  /** URL do repositório GitHub */
  github: string | null
  
  /** URL da demo/produção */
  demo: string | null
  
  /** URL da imagem de preview */
  image: string
  
  /** Se é projeto destacado (aparece primeiro) */
  featured: boolean
  
  /** Status do projeto */
  status: 'active' | 'archived' | 'in-progress'
  
  /** Categoria do projeto */
  category: 'backend' | 'frontend' | 'fullstack' | 'tools'
}
