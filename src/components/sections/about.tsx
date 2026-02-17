"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap } from "lucide-react"

export function About() {
  const skills = [
    {
      icon: Code,
      title: "Clean Architecture",
      description: "Separação das responsabiliades de módulos entre camadas"
    },
    {
      icon: Palette,
      title: "Front-end",
      description: "Desenvolvimento de landing pages comerciais e email marketing"
    },
    {
      icon: Zap,
      title: "APIs RESTful",
      description: "Desenvolvimento de sistemas escaláveis com Fastify, Prisma e PostgreSQL"
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
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
              Sobre Mim
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Apaixonado por tecnologia e inovação desde sempre, transformo ideias em soluções digitais
              que impactam e fazem a diferença real.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Minha Jornada
                </h3>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                <span className="font-bold text-sky-600">Desenvolvedor web </span> 
                atuando no <span className="font-bold text-sky-600">frontend</span> desenvolvendo principalmente landing pages com next e email marketing e com mais foco e afinadade com o <span className="font-bold text-sky-600">back-end</span> desenvolvendo sistema comercial 
                completo com <span className="font-bold text-sky-600">Clean Architecture</span>.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Implementei casos de uso e módulos completos (Autenticação, Categorias, Produtos, 
                Leads, Arquivos) aplicando <span className="font-bold text-sky-600">SOLID, Dependency Injection, Adapter Pattern</span> e 
                <span className="font-bold text-sky-600"> Multi-tenancy</span>.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Stack: <span className="font-bold text-sky-600">Node.js, Fastify, Prisma, PostgreSQL, Vue 3, TypeScript, 
                Docker, AWS S3, Vitest, React, Next.js, PHP, Python</span>. Focado em testes automatizados e 
                <span className="font-bold text-sky-600"> alta cobertura de código</span>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid gap-6"
            >
              {skills.map((skill, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex-shrink-0">
                        <skill.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{skill.title}</h4>
                        <p className="text-sm text-gray-600">{skill.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}