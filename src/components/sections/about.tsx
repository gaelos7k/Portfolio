"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap } from "lucide-react"

export function About() {
  const skills = [
    {
      icon: Code,
      title: "Clean Architecture",
      description: "Implementação completa com 4 camadas, SOLID principles e Dependency Injection"
    },
    {
      icon: Palette,
      title: "Testes Automatizados",
      description: "260+ testes (187 unitários + 73 integração) com 100% cobertura"
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
              Apaixonado por tecnologia e inovação, transformo ideias em soluções digitais
              que impactam e fazem a diferença pro seu negócio.
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
              <p className="text-gray-600 mb-4">
                Sou <strong>Bacharel em Administração de Empresas</strong>, com experiência em gestão, atendimento e 
                operação de negócios no Sebrae Minas e em empresa familiar. Atualmente em <strong>transição de carreira 
                para tecnologia</strong>, estudei Técnico em Desenvolvimento de Sistemas no Senac, aprofundando conhecimentos 
                em lógica de programação, Python, JavaScript, POO e metodologias de desenvolvimento.
              </p>
              <p className="text-gray-600 mb-4">
                Desde <strong>setembro de 2025</strong>, atuo como <strong>estagiário fullstack</strong> (com foco em backend), 
                desenvolvendo do zero um sistema comercial completo com <strong>Clean Architecture</strong>. Implementei 
                múltiplos <strong>casos de uso</strong>, <strong>repositórios</strong> e <strong>módulos completos</strong> 
                (Autenticação, Categorias, Produtos, Leads, Arquivos) aplicando padrões como Adapter Pattern, Dependency Injection 
                e Multi-tenancy.
              </p>
              <p className="text-gray-600 mb-4">
                Tenho experiência prática com <strong>Fastify, Prisma ORM, PostgreSQL, TypeScript, JWT, Zod, Docker</strong> 
                e integração com <strong>AWS S3</strong>. Desenvolvi sistema de upload com streaming, migração de dados complexa, 
                e implementei <strong>testes automatizados</strong> com Vitest, alcançando alta cobertura e seguindo boas práticas 
                de engenharia de software.
              </p>
              <p className="text-gray-600">
                Como <strong>desenvolvedor fullstack</strong>, trabalho com <strong>Vue 3, Bulma CSS, SCSS</strong> e 
                <strong> TypeScript</strong> no frontend, além de <strong>React e Next.js</strong> em projetos pessoais. 
                Também desenvolvo ferramentas internas com <strong>PHP e Composer</strong>, demonstrando versatilidade 
                para resolver problemas com diferentes tecnologias conforme a necessidade do projeto.
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