import Hero from "@/components/Hero"
import About from "@/components/About"
import Services from "@/components/Services"
import Projects from "@/components/Projects"
import CreativeLab from "@/components/CreativeLab"
import Blog from "@/components/Blog"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      {/* Hero Section - Full viewport, centered */}
      <section className="flex-shrink-0">
        <Hero />
      </section>

      {/* Main Content Sections */}
      <div className="flex-1 flex flex-col w-full">
        {/* About Section */}
        <section className="w-full flex justify-center">
          <div className="w-full max-w-none">
            <About />
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full flex justify-center">
          <div className="w-full max-w-none">
            <Services />
          </div>
        </section>

        {/* Projects Section */}
        <section className="w-full flex justify-center">
          <div className="w-full max-w-none">
            <Projects />
          </div>
        </section>

        {/* Creative Lab Section */}
        <section className="w-full flex justify-center">
          <div className="w-full max-w-none">
            <CreativeLab />
          </div>
        </section>

        {/* Blog Section */}
        <section className="w-full flex justify-center">
          <div className="w-full max-w-none">
            <Blog />
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full flex justify-center">
          <div className="w-full max-w-none">
            <Contact />
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="flex-shrink-0 w-full">
        <Footer />
      </footer>
    </div>
  )
}
