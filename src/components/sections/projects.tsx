"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Sistema Comercial - API RESTful",
      description: "API completa desenvolvida com Clean Architecture, incluindo autenticação JWT, CRUD de categorias, produtos, leads e arquivos. Implementa multi-tenancy, Dependency Injection, Adapter Pattern e upload com streaming para S3. Testes automatizados com alta cobertura.",
      technologies: ["Node.js", "TypeScript", "Fastify", "Prisma", "PostgreSQL", "Docker", "Vitest", "AWS S3", "Clean Architecture"],
      githubUrl: "",
      liveUrl: "",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop&crop=center"
    },
    {
      title: "Migração de Dados Complexa",
      description: "Script avançado para migração massiva de dados do WordPress/MySQL para PostgreSQL. Implementa tratamento de concorrência com promise pool, validação de URLs, sanitização de arquivos, múltiplas transações atômicas e garantia de integridade dos dados.",
      technologies: ["TypeScript", "Prisma", "PostgreSQL", "Streams", "Concorrência", "Promise Pool"],
      githubUrl: "",
      liveUrl: "",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center"
    },
    {
      title: "Interfaces Comerciais PHP",
      description: "Conjunto de ferramentas internas para equipe comercial incluindo: API de consulta a polos educacionais, API de consulta a conversas no WhatsApp, sistema de consulta de leads e interfaces de consulta ao banco de dados. Desenvolvido com PHP, Bulma CSS e Composer.",
      technologies: ["PHP", "Bulma CSS", "Composer", "MySQL", "REST APIs"],
      githubUrl: "",
      liveUrl: "",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center"
    },
    {
      title: "E-commerce Vue 3",
      description: "Desenvolvimento frontend para plataforma de e-commerce com Vue 3, TypeScript e SCSS. Implementa componentes responsivos mobile-first, simuladores educacionais, snippets dinâmicos e integração com webhooks externos. Usa Bun como runtime.",
      technologies: ["Vue 3", "TypeScript", "SCSS", "Bun", "Responsive Design", "Webhooks"],
      githubUrl: "",
      liveUrl: "",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=250&fit=crop&crop=center"
    },
    {
      title: "Background Removal API",
      description: "API para remoção de fundo de imagens, permitindo que os usuários enviem fotos e recebam versões editadas sem fundo. Desenvolvida com Python utilizando frameworks e bibliotecas especializadas em processamento de imagens, oferece endpoints RESTful com documentação clara usando FastAPI.",
      technologies: ["Python", "FastAPI", "Pillow", "OpenCV", "Image Processing"],
      githubUrl: "https://github.com/gaelos7k/Background-Removal-API.git",
      liveUrl: "https://bemasnap-api.onrender.com",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop&crop=center"
    },
    {
      title: "Portfolio Website",
      description: "Website portfólio profissional com design moderno e responsivo. Implementa animações fluidas com Framer Motion, navegação intuitiva, componentes reutilizáveis e formulário de contato funcional. Atualizado com correções de vulnerabilidades críticas (CVE-2025-55182).",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/gaelos7k/Portfolio",
      liveUrl: "https://www.gabrielgoncalves.tech/",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop&crop=center"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meus Projetos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Uma seleção dos meus trabalhos mais recentes e relevantes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-video bg-gray-200 relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-sky-50 text-sky-700 text-sm rounded-full border border-sky-200 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                            <Github className="w-4 h-4 mr-2" />
                            Código
                          </a>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button size="sm" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                      {!project.githubUrl && !project.liveUrl && (
                        <span className="text-sm text-gray-500 italic">Projeto privado da organização</span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com/gaelos7k" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                Ver mais projetos no GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}