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
      value: "Versatilidade",
      description: "Node, Vue, PHP, Python, PostgreSQL"
    },
    {
      icon: Code2,
      title: "Padrões Avançados",
      value: "Clean Code",
      description: "SOLID, DI, Multi-tenancy, Adapters"
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-sky-50 to-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Destaques Profissionais
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
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
                <Card className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 h-full overflow-hidden group">
                  <CardContent className="p-8 text-center relative">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <highlight.icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-3">
                      {highlight.value}
                    </h3>
                    <p className="text-base font-semibold text-sky-600 mb-3">
                      {highlight.title}
                    </p>
                    <p className="text-sm text-slate-600">
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
