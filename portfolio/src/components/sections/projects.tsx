"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Desenvolvimento de Sistemas - Senac",
      description: "Repositório abrangente contendo todo o conteúdo estudado durante 1 ano e meio do curso técnico de Desenvolvimento de Sistemas do Senac Minas em Pouso Alegre. Engloba projetos práticos, exercícios acadêmicos e implementações que demonstram evolução técnica em desenvolvimento de software, desde conceitos fundamentais até aplicações avançadas.",
      technologies: ["Desenvolvimento de Sistemas", "Projetos Acadêmicos", "Lógica de Programação", "Análise de Sistemas"],
      githubUrl: "https://github.com/gaelos7k/Desenvolvimento-de-sistemas-Senac",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop&crop=center"
    },
    {
      title: "Sistema de Cadastro de Produtos",
      description: "Sistema web completo para gerenciamento de produtos desenvolvido como projeto acadêmico de recuperação em Programação Orientada a Objetos. Implementa operações CRUD completas com interface responsiva, validação robusta de dados e armazenamento local, demonstrando proficiência em desenvolvimento web full-stack com tecnologias fundamentais.",
      technologies: ["HTML", "CSS", "JavaScript", "Programação Orientada a Objetos"],
      githubUrl: "https://github.com/gaelos7k/UC4---POO",
      liveUrl: "https://gaelos7k.github.io/UC4---POO/",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&crop=center"
    },
    {
      title: "API Back-end com Node.js",
      description: "API RESTful desenvolvida durante imersão técnica especializada em back-end. Implementa arquitetura de servidor robusta com roteamento, middleware e manipulação de dados, demonstrando habilidades em desenvolvimento de serviços web escaláveis e integração de sistemas.",
      technologies: ["Node.js", "JavaScript", "API", "Back-end"],
      githubUrl: "https://github.com/gaelos7k/imersaoBackAndAlura",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop&crop=center"
    },
    {
      title: "Portfolio Website",
      description: "Website portfólio profissional com design moderno e responsivo. Implementa animações fluidas, navegação intuitiva e arquitetura de componentes reutilizáveis, demonstrando expertise em desenvolvimento front-end avançado e melhores práticas de UX/UI.",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
      githubUrl: "#",
      liveUrl: "#",
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
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
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
                          className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                          <Github className="w-4 h-4 mr-2" />
                          Código
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
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
            <Button size="lg" variant="outline" className="cursor-pointer">
              Ver mais projetos no GitHub
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}