"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { PERSONAL_INFO } from "@/lib/constants"

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`
    },
    {
      icon: Phone,
      title: "Telefone",
      value: PERSONAL_INFO.phone,
      href: `tel:${PERSONAL_INFO.phone.replace(/\D/g, '')}`
    },
    {
      icon: MapPin,
      title: "Localização",
      value: PERSONAL_INFO.location,
      href: "#contact"
    }
  ]

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const firstName = formData.get('firstName')
    const lastName = formData.get('lastName')
    const email = formData.get('email')
    const subject = formData.get('subject')
    const message = formData.get('message')
    
    const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(String(subject))}&body=${encodeURIComponent(`Nome: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`)}`
    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 px-4">
              Vamos Conversar
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Estou sempre interessado em novos projetos e oportunidades.
              Entre em contato comigo!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 md:mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-4 md:space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex items-center space-x-3 sm:space-x-4">
                          <div className="p-2.5 sm:p-3 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex-shrink-0">
                            <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{info.title}</h4>
                            <a
                              href={info.href}
                              className="text-gray-600 hover:text-sky-600 transition-colors cursor-pointer text-xs sm:text-sm break-words"
                            >
                              {info.value}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-lg">
                <CardHeader className="space-y-1 p-4 sm:p-6">
                  <CardTitle className="text-lg sm:text-xl">Envie uma mensagem</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">
                    Preencha o formulário abaixo e entrarei em contato em breve.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6">
                  <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                          Nome
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                        className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        placeholder="Seu nome"
                      />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                          Sobrenome
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                        className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        placeholder="Seu sobrenome"
                      />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        placeholder="seu.email@exemplo.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Assunto
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        placeholder="Assunto da mensagem"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Mensagem
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent resize-none"
                        placeholder="Digite sua mensagem aqui..."
                      />
                    </div>
                    <Button type="submit" className="w-full bg-sky-600 hover:bg-sky-700 text-sm sm:text-base py-2.5 sm:py-2">
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}