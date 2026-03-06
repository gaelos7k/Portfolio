import type { Project } from '@/lib/types'

/**
 * Projetos do portfólio
 */
export const PROJECTS: Project[] = [
  {
    id: "elogiador-github",
    title: "Elogiador de GitHub",
    description: "Sátira ao 'humilhador de GitHub' que consulta a API do GitHub e dá feedback positivo do perfil. Projeto completo em produção com stack moderna.",
    longDescription: "Aplicação web que usa a API do GitHub para analisar perfis e gerar elogios personalizados usando IA. Implementa i18n, validação com Zod, e analytics com Vercel.",
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4.0", "Zod", "OpenAI API", "Vercel Analytics"],
    github: "https://github.com/gaelos7k/elogiador-de-github",
    demo: "https://elogiador-de-github.vercel.app",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=500&fit=crop",
    featured: true,
    status: "active",
    category: "fullstack",
  },
  {
    id: "ytmp3",
    title: "ytmp3",
    description: "Ferramenta de scraping do YouTube para baixar músicas e organizar em pastas. Usa yt-dlp e FFmpeg para conversão automática para MP3.",
    longDescription: "Script Python que automatiza o download de áudio de vídeos do YouTube, converte para MP3 com bitrate configurável e organiza playlists em estrutura de pastas.",
    tech: ["Python", "yt-dlp", "FFmpeg", "CLI"],
    github: "https://github.com/gaelos7k/ytmp3",
    demo: null,
    image: "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=800&h=500&fit=crop",
    featured: true,
    status: "active",
    category: "tools",
  },
  {
    id: "background-removal-api",
    title: "Background Removal API",
    description: "API gratuita e open source que remove automaticamente o fundo de imagens usando deep learning. Funcional, mas aguardando otimização para produção.",
    longDescription: "API REST desenvolvida com Python e FastAPI que utiliza modelos de deep learning para remover fundos de imagens. Explorando versão light do modelo para deploy em recursos limitados.",
    tech: ["Python", "FastAPI", "Deep Learning", "Image Processing", "OpenCV"],
    github: "https://github.com/gaelos7k/Background-Removal-API",
    demo: null,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop",
    featured: true,
    status: "in-progress",
    category: "backend",
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description: "Website portfólio profissional com design moderno e responsivo. Implementa animações fluidas, componentes reutilizáveis e formulário de contato funcional.",
    longDescription: "Portfolio desenvolvido com Next.js 15, React 19 e Tailwind CSS. Inclui design system customizado, animações com Framer Motion, testes com Vitest e integração com Supabase para analytics.",
    tech: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Vitest", "Supabase"],
    github: "https://github.com/gaelos7k/Portfolio",
    demo: "https://www.gabrielgoncalves.tech/",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop",
    featured: false,
    status: "active",
    category: "fullstack",
  },
]

/**
 * Projetos destacados (featured)
 */
export const FEATURED_PROJECTS = PROJECTS.filter(p => p.featured)

/**
 * Projetos por categoria
 */
export const PROJECTS_BY_CATEGORY = {
  backend: PROJECTS.filter(p => p.category === 'backend'),
  frontend: PROJECTS.filter(p => p.category === 'frontend'),
  fullstack: PROJECTS.filter(p => p.category === 'fullstack'),
  tools: PROJECTS.filter(p => p.category === 'tools'),
}
