"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap } from "lucide-react"

export function About() {
  const skills = [
    {
      icon: Code,
      title: "Desenvolvimento",
      description: "Especialista em React, Next.js, Node.js e TypeScript"
    },
    {
      icon: Palette,
      title: "Design",
      description: "Foco em UI/UX com Tailwind CSS e design systems"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Otimização de aplicações web para máxima performance"
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
              Apaixonado por tecnologia e inovação, transformo ideias em soluções digitais
              que fazem a diferença no mundo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Minha Jornada
              </h3>
              <p className="text-gray-600 mb-4">
                Comecei minha carreira como desenvolvedor frontend e rapidamente me apaixonei
                pelo ecossistema JavaScript. Ao longo dos anos, evolui para full-stack,
                trabalhando com as tecnologias mais modernas do mercado.
              </p>
              <p className="text-gray-600 mb-4">
                Atualmente, foco em criar aplicações web escaláveis, performáticas e com
                excelente experiência do usuário. Acredito que a tecnologia deve ser
                acessível e intuitiva para todos.
              </p>
              <p className="text-gray-600">
                Quando não estou codando, gosto de contribuir para projetos open source,
                escrever artigos técnicos e compartilhar conhecimento com a comunidade.
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
                      <div className="p-3 bg-purple-100 rounded-lg">
                        <skill.icon className="w-6 h-6 text-purple-600" />
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