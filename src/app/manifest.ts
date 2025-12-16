import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Gabriel Gonçalves - Desenvolvedor Fullstack',
    short_name: 'Gabriel Dev',
    description: 'Portfolio profissional de Gabriel Gonçalves, Desenvolvedor Fullstack especializado em Clean Architecture',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0ea5e9',
    icons: [
      {
        src: '/web-development.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
