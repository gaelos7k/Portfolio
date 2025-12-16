import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { generatePersonSchema, generateWebSiteSchema } from "@/lib/schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gabriel Gonçalves - Desenvolvedor Fullstack",
  description: "Desenvolvedor Fullstack com foco em Backend. Especializado em Clean Architecture, APIs RESTful escaláveis, Node.js, TypeScript, Vue.js, Fastify e PostgreSQL. 260+ testes automatizados e boas práticas de engenharia de software.",
  keywords: ["desenvolvedor fullstack", "backend developer", "clean architecture", "node.js", "typescript", "vue.js", "fastify", "postgresql", "api restful", "prisma orm", "gabriel gonçalves"],
  authors: [{ name: "Gabriel Gonçalves", url: "https://www.gabrielgoncalves.tech" }],
  creator: "Gabriel Gonçalves",
  publisher: "Gabriel Gonçalves",
  metadataBase: new URL('https://www.gabrielgoncalves.tech'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Gabriel Gonçalves - Desenvolvedor Fullstack",
    description: "Especializado em Clean Architecture, APIs RESTful e testes automatizados. Node.js, TypeScript, Vue.js, Fastify e PostgreSQL.",
    url: "https://www.gabrielgoncalves.tech",
    siteName: "Gabriel Gonçalves Portfolio",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Gonçalves - Desenvolvedor Fullstack",
    description: "Especializado em Clean Architecture, APIs RESTful e testes automatizados.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/web-development.svg",
  },
  verification: {
    google: "seu-codigo-google-search-console",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = generatePersonSchema();
  const websiteSchema = generateWebSiteSchema();

  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
