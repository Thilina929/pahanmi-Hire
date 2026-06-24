import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Technology from './components/Technology'
import Roadmap from './components/Roadmap'
import CompetitiveAdvantage from './components/CompetitiveAdvantage'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  const handleNavClick = (id) => {
    setIsMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="w-full overflow-hidden bg-white">
      <Navbar 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
        onNavClick={handleNavClick}
        activeSection={activeSection}
      />
      <main>
        <section id="home">
          <Hero onNavClick={handleNavClick} />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="features">
          <Features />
        </section>
        <section id="technology">
          <Technology />
        </section>
        <section id="roadmap">
          <Roadmap />
        </section>
        <section id="advantages">
          <CompetitiveAdvantage />
        </section>
        <section id="cta">
          <CTA onNavClick={handleNavClick} />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer onNavClick={handleNavClick} />
    </div>
  )
}
