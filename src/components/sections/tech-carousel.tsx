"use client"

import { motion } from "framer-motion"
import { 
  SiNodedotjs, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiVuedotjs, 
  SiPostgresql, 
  SiPrisma, 
  SiDocker, 
  SiGit, 
  SiFastify,
  SiPhp,
  SiPython
} from "react-icons/si"
import type { IconType } from "react-icons"

export function TechCarousel() {
  // Lista de tecnologias com seus ícones reais
  const technologies: Array<{ name: string; icon: IconType; color: string }> = [
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Fastify", icon: SiFastify, color: "#000000" },
    { name: "PHP", icon: SiPhp, color: "#777BB4" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
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
          {duplicatedTechs.map((tech, index) => {
            const IconComponent = tech.icon
            return (
              <motion.div
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 w-40 h-40 flex flex-col items-center justify-center bg-slate-50 rounded-2xl transition-all duration-300 group"
                whileHover={{
                  scale: 1.1,
                }}
              >
                <motion.div
                  className="mb-3 transition-all duration-300"
                  initial={{ color: "#0ea5e9" }}
                  whileHover={{ color: tech.color }}
                >
                  <IconComponent className="w-16 h-16" />
                </motion.div>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
