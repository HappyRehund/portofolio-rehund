import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Tech from "./components/Tech"

function App() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar />
      {/* Hero */}
      <Hero />
      {/* About */}
      <About />
      {/* Tech */}
      <Tech />
      {/* Projects */}
      <Projects />
      {/* Contact */}
      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
