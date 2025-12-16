import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Highlights } from "@/components/sections/highlights"
import { TechCarousel } from "@/components/sections/tech-carousel"
import { Projects } from "@/components/sections/projects"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Highlights />
      <TechCarousel />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
