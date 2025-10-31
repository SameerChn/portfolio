import { Sidebar } from "@/components/sidebar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-hidden">
        <div className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
          <section id="hero" className="snap-start">
            <Hero />
          </section>
          <section id="about" className="snap-start">
            <About />
          </section>
          <section id="projects" className="snap-start">
            <Projects />
          </section>
          <section id="skills" className="snap-start">
            <Skills />
          </section>
          <section id="contact" className="snap-start">
            <Contact />
          </section>
          <Footer />
        </div>
      </main>
    </div>
  )
}
