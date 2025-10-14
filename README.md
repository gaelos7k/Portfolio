# Portfólio Pessoal - Next.js 14

Um portfólio pessoal moderno desenvolvido com as tecnologias mais atuais do mercado.

## 🚀 Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática para maior segurança
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Animações fluidas e interativas
- **Lucide React** - Ícones modernos e consistentes
- **Radix UI** - Componentes acessíveis e sem estilo

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── ui/           # Componentes reutilizáveis (Button, Card, etc.)
│   ├── sections/     # Seções do portfólio (Hero, About, Skills, etc.)
│   ├── navbar.tsx    # Navegação principal
│   └── footer.tsx    # Rodapé do site
├── lib/
│   └── utils.ts      # Funções utilitárias
└── app/
    ├── layout.tsx    # Layout raiz da aplicação
    ├── page.tsx      # Página principal
    └── globals.css   # Estilos globais
```

## 🛠️ Instalação e Execução

1. **Clone o repositório**
   ```bash
   git clone <seu-repositorio>
   cd portfolio
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Abra no navegador**
   ```
   http://localhost:3000
   ```

## 📱 Seções do Portfólio

- **Hero** - Apresentação com animações e call-to-actions
- **About** - Informações pessoais e jornada profissional
- **Skills** - Habilidades técnicas organizadas por categoria
- **Projects** - Showcase dos projetos com links e tecnologias
- **Contact** - Formulário de contato e informações

## 🎨 Personalização

Para personalizar o portfólio:

1. **Informações pessoais**: Edite os componentes nas pastas `sections/`
2. **Cores e tema**: Modifique as variáveis CSS em `globals.css`
3. **Projetos**: Atualize a lista de projetos em `sections/projects.tsx`
4. **Habilidades**: Ajuste as habilidades em `sections/skills.tsx`

## 📦 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter

## 🚀 Deploy

O projeto está pronto para deploy em qualquer plataforma que suporte Next.js:

- **Vercel** (recomendado)
- **Netlify**
- **Railway**
- **Heroku**

## 📄 Licença

Este projeto está sob a licença MIT.

---

Desenvolvido com ❤️ usando Next.js 14
