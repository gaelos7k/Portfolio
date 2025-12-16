export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Gabriel Gonçalves',
    jobTitle: 'Desenvolvedor Fullstack',
    description: 'Desenvolvedor Fullstack especializado em Clean Architecture, APIs RESTful e testes automatizados',
    url: 'https://www.gabrielgoncalves.tech',
    sameAs: [
      'https://github.com/gaelos7k',
      'https://www.linkedin.com/in/gabrielgonçalves0504/',
    ],
    knowsAbout: [
      'Clean Architecture',
      'Node.js',
      'TypeScript',
      'Vue.js',
      'React',
      'PostgreSQL',
      'Fastify',
      'Prisma ORM',
      'REST APIs',
      'Docker',
      'Git',
    ],
    email: 'gabrielhenrique.dev0504@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pouso Alegre',
      addressRegion: 'MG',
      addressCountry: 'BR',
    },
  }
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Gabriel Gonçalves Portfolio',
    url: 'https://www.gabrielgoncalves.tech',
    description: 'Portfolio profissional de Gabriel Gonçalves, Desenvolvedor Fullstack',
    author: {
      '@type': 'Person',
      name: 'Gabriel Gonçalves',
    },
    inLanguage: 'pt-BR',
  }
}
