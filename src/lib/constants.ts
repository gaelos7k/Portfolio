// Informações pessoais centralizadas
export const PERSONAL_INFO = {
  name: "Gabriel Gonçalves",
  role: "Desenvolvedor Fullstack",
  tagline: "Especializado em Clean Architecture, APIs RESTful e testes automatizados | Foco em Backend",
  email: "gabrielhenrique.dev0504@gmail.com",
  phone: "+55 (35) 98829-9016",
  location: "Pouso Alegre, MG - Brasil",
  github: "https://github.com/gaelos7k",
  linkedin: "https://www.linkedin.com/in/gabrielgonçalves0504/",
  website: "https://www.gabrielgoncalves.tech/"
} as const

// Links de navegação
export const NAV_ITEMS = [
  { name: "Início", href: "#hero" },
  { name: "Sobre", href: "#about" },
  { name: "Habilidades", href: "#skills" },
  { name: "Projetos", href: "#projects" },
  { name: "Contato", href: "#contact" }
] as const

// Habilidades técnicas
export const SKILLS = {
  backend: [
    { name: "Node.js", level: 90 },
    { name: "TypeScript", level: 90 },
    { name: "Fastify", level: 90 },
    { name: "Prisma ORM", level: 90 },
    { name: "PostgreSQL", level: 85 },
    { name: "Python", level: 80 },
    { name: "PHP", level: 75 },
    { name: "Clean Architecture", level: 85 }
  ],
  frontend: [
    { name: "Vue 3", level: 80 },
    { name: "React", level: 85 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 90 },
    { name: "Bulma CSS", level: 80 },
    { name: "SCSS", level: 80 }
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "Docker", level: 80 },
    { name: "Vitest", level: 85 },
    { name: "Postman", level: 85 },
    { name: "Redis", level: 70 },
    { name: "AWS S3", level: 75 }
  ]
} as const
