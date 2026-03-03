import type { Skill, SkillGroup } from '@/lib/types'

/**
 * Habilidades técnicas organizadas por categoria
 */

// Backend Skills
const BACKEND_SKILLS: Skill[] = [
  { name: "Node.js", category: "backend", experience: "advanced" },
  { name: "TypeScript", category: "backend", experience: "advanced" },
  { name: "Fastify", category: "backend", experience: "advanced" },
  { name: "Prisma ORM", category: "backend", experience: "advanced" },
  { name: "PostgreSQL", category: "backend", experience: "intermediate" },
  { name: "Python", category: "backend", experience: "intermediate" },
  { name: "PHP", category: "backend", experience: "intermediate" },
  { name: "Clean Architecture", category: "backend", experience: "intermediate" },
]

// Frontend Skills
const FRONTEND_SKILLS: Skill[] = [
  { name: "Vue 3", category: "frontend", experience: "intermediate" },
  { name: "Nuxt", category: "frontend", experience: "intermediate" },
  { name: "React", category: "frontend", experience: "intermediate" },
  { name: "Next.js", category: "frontend", experience: "intermediate" },
  { name: "TypeScript", category: "frontend", experience: "advanced" },
  { name: "Tailwind CSS", category: "frontend", experience: "intermediate" },
  { name: "Bulma CSS", category: "frontend", experience: "intermediate" },
  { name: "SCSS", category: "frontend", experience: "intermediate" },
]

// Tools & DevOps
const TOOLS_SKILLS: Skill[] = [
  { name: "Git", category: "tools", experience: "advanced" },
  { name: "Docker", category: "tools", experience: "intermediate" },
  { name: "Vitest", category: "tools", experience: "intermediate" },
  { name: "Postman", category: "tools", experience: "intermediate" },
  { name: "Redis", category: "tools", experience: "learning" },
  { name: "AWS S3", category: "tools", experience: "intermediate" },
]

/**
 * Skills agrupadas para renderização
 */
export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "backend",
    title: "Backend",
    skills: BACKEND_SKILLS,
  },
  {
    category: "frontend",
    title: "Frontend",
    skills: FRONTEND_SKILLS,
  },
  {
    category: "tools",
    title: "Ferramentas & DevOps",
    skills: TOOLS_SKILLS,
  },
]

/**
 * Todas as skills (flat array)
 */
export const ALL_SKILLS: Skill[] = [
  ...BACKEND_SKILLS,
  ...FRONTEND_SKILLS,
  ...TOOLS_SKILLS,
]
