// Informações pessoais centralizadas
export const PERSONAL_INFO = {
  name: "Gabriel Gonçalves",
  role: "Desenvolvedor Backend",
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
  frontend: [
    { name: "React", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Tailwind CSS", level: 90 },
    { name: "JavaScript", level: 95 },
    { name: "CSS3", level: 90 },
    { name: "HTML5", level: 95 }
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 },
    { name: "PostgreSQL", level: 75 },
    { name: "MySQL", level: 70 },
    { name: "REST APIs", level: 90 },
    { name: "Fastify", level: 90 }
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "Docker", level: 70 },
    { name: "Postman", level: 80 },
    { name: "VS Code", level: 95 }
  ]
} as const
