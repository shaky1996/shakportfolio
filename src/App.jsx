import { About } from './components/About'
import { Certifications } from './components/Certifications'
import { Connect } from './components/Connect'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="page-sections">
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Connect />
        </div>
      </main>
      <footer>
        <span>© {new Date().getFullYear()} Shak Yuldashev</span>
        <span>Designed &amp; built with care.</span>
      </footer>
    </>
  )
}

export default App
