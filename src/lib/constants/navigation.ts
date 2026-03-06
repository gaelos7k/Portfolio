/**
 * Links de navegação do site
 */
export const NAV_ITEMS = [
  { name: "Início", href: "#hero" },
  { name: "Sobre", href: "#about" },
  { name: "Destaques", href: "#highlights" },
  { name: "Habilidades", href: "#skills" },
  { name: "Projetos", href: "#projects" },
  { name: "Contato", href: "#contact" },
] as const

/**
 * Links do footer
 */
export const FOOTER_LINKS = {
  quick: [
    { name: "Sobre", href: "#about" },
    { name: "Habilidades", href: "#skills" },
    { name: "Projetos", href: "#projects" },
    { name: "Contato", href: "#contact" },
  ],
  social: [
    { name: "GitHub", href: "https://github.com/gaelos7k" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/gabrielgonçalves0504/" },
  ],
} as const
