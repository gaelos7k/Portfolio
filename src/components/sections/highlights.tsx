"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, TestTube, Layers, Database } from "lucide-react"

export function Highlights() {
  const highlights = [
    {
      icon: Layers,
      title: "Clean Architecture",
      value: "Produção",
      description: "Arquitetura em camadas com SOLID"
    },
    {
      icon: TestTube,
      title: "Qualidade de Código",
      value: "100%",
      description: "Testes automatizados e cobertura"
    },
    {
      icon: Database,
      title: "Stack Fullstack",
      value: "Backend + Frontend",
      description: "Node, Vue, PHP, Python, PostgreSQL"
    },
    {
      icon: Code2,
      title: "Experiência",
      value: "3+ Meses",
      description: "Desde setembro/2025"
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-slate-900 to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Destaques Profissionais
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Versatilidade fullstack com experiência real em arquitetura e boas práticas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-purple-600 rounded-lg">
                        <highlight.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {highlight.value}
                    </h3>
                    <p className="text-sm font-semibold text-purple-300 mb-2">
                      {highlight.title}
                    </p>
                    <p className="text-xs text-gray-300">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
