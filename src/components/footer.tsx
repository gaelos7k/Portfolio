"use client"

import { motion } from "framer-motion"
import { PERSONAL_INFO } from "@/lib/constants"
import { SocialLinks } from "@/components/social-links"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">{PERSONAL_INFO.name.split(' ')[0]}</h3>
              <p className="text-gray-300 mb-4">
                Desenvolvedor Web focado em backend, clean code e arquitetura escalável.
              </p>
              <SocialLinks iconSize={20} />
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                    Habilidades
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                    Projetos
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                    Contato
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-gray-300">
                <p>{PERSONAL_INFO.location}</p>
                <p>{PERSONAL_INFO.email}</p>
                <p>{PERSONAL_INFO.phone}</p>
              </div>
            </motion.div>
          </div>

          {/* Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 pt-8 text-center"
          >
            <p className="text-gray-300 flex items-center justify-center gap-2">
              Feito por {PERSONAL_INFO.name}
            </p>
            <p className="text-gray-600 text-sm mt-2">
              © {currentYear} Todos os direitos reservados.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}