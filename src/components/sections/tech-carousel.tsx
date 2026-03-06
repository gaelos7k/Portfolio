"use client"

import { motion } from "framer-motion"

export function TechCarousel() {
  // Lista de tecnologias
  const technologies = [
    "Node.js",
    "TypeScript",
    "React",
    "Next.js",
    "Vue.js",
    "PostgreSQL",
    "Prisma",
    "Docker",
    "Git",
    "Fastify",
    "PHP",
    "Python",
  ]

  // Duplicar array para criar efeito infinito suave
  const duplicatedTechs = [...technologies, ...technologies, ...technologies]

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tecnologias
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stack completo para desenvolvimento fullstack
          </p>
        </motion.div>
      </div>

      <div className="relative">
        {/* Gradientes nas bordas */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Carrossel infinito */}
        <motion.div
          className="flex gap-8"
          animate={{
            x: [0, -2400],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {duplicatedTechs.map((tech, index) => (
            <motion.div
              key={`${tech}-${index}`}
              className="flex-shrink-0 w-40 h-40 flex items-center justify-center bg-slate-50 rounded-2xl transition-all duration-300 hover:bg-slate-100 group"
              whileHover={{
                scale: 1.1,
              }}
            >
              <span className="text-lg font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                {tech}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
