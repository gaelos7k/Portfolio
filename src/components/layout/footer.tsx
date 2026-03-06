"use client"

import { motion } from "framer-motion"
import { PERSONAL_INFO } from "@/lib/constants/personal-info"
import { FOOTER_LINKS } from "@/lib/constants/navigation"
import { SocialLinks } from "@/components/social-links"

/**
 * Footer - Rodapé do site
 * 
 * Contém:
 * - Informações de contato
 * - Links rápidos
 * - Links sociais
 * - Copyright
 */
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-950 text-neutral-50 py-12 border-t border-neutral-800">
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
              <h3 className="text-2xl font-bold mb-4 text-primary-500">
                {PERSONAL_INFO.name.split(' ')[0]}
              </h3>
              <p className="text-neutral-300 mb-4">
                {PERSONAL_INFO.tagline}
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
                {FOOTER_LINKS.quick.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-neutral-400 hover:text-primary-500 transition-colors cursor-pointer"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
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
              <div className="space-y-2 text-neutral-400">
                <p>{PERSONAL_INFO.location}</p>
                <p className="hover:text-primary-500 transition-colors">
                  <a href={`mailto:${PERSONAL_INFO.email}`}>{PERSONAL_INFO.email}</a>
                </p>
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
            className="border-t border-neutral-800 pt-8 text-center"
          >
            <p className="text-neutral-300 flex items-center justify-center gap-2">
              Feito por {PERSONAL_INFO.name}
            </p>
            <p className="text-neutral-600 text-sm mt-2">
              © {currentYear} Todos os direitos reservados.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
