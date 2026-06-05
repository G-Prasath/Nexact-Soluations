import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useScrollSpy } from '../hooks/useScrollSpy'

const NAV_LINKS = [
  { id: 'about', label: 'About Us' },
  // { id: 'skills', label: 'Skills' },
  // { id: 'projects', label: 'Works' },
  { id: 'experience', label: 'Services' },
  { id: 'testimonials', label: 'Clients' },
  { id: 'contact', label: 'Contact Us' },
]

export default function Navbar({ isDark, onToggle }) {
  const navRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useScrollSpy(NAV_LINKS.map(l => l.id))

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
    )
  }, [])

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? !isDark ? 'py-5 bg-ink-950/ dark:bg-ink-950/90 light:bg-cream-90/90 backdrop-blur-xl border-b border-white/5 shadow-lg' : 'py-5 bg-ink-950/90 dark:bg-ink-950/90 light:bg-cream-50/90 backdrop-blur-xl border-b border-white/5'
          : 'py-5 bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-display text-xl font-bold tracking-tight hover:text-accent transition-colors">
          {/* <span className="text-accent">NA</span> S */}
          <img src="/logo.png" alt="logo" className='w-[100px]' />
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                className={`font-sans text-sm font-medium tracking-wide transition-all duration-200 relative group ${
                  active === link.id ? 'text-accent' : 'text-current opacity-60 hover:opacity-100'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-300 ${
                  active === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </button>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          {/* <button
            onClick={onToggle}
            aria-label="Toggle theme"
            className="relative w-14 h-7 rounded-full border border-white/10 bg-ink-700/50 dark:bg-ink-700/50 transition-colors duration-500 hover:border-accent/40 overflow-hidden"
          >
            <span className={`absolute top-1 w-5 h-5 rounded-full flex items-center justify-center transition-all duration-500 ease-spring ${
              isDark ? 'left-1 bg-ink-900 text-accent' : 'left-7 bg-accent text-ink-950'
            }`}>
              {isDark ? <Moon size={11} /> : <Sun size={11} />}
            </span>
          </button> */}

          {/* CTA */}
          <button onClick={() => scrollTo('contact')} className="hidden md:flex btn-primary text-xs px-4 py-2">
            Enquiry
          </button>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 opacity-70 hover:opacity-100 transition-opacity"
            onClick={() => setMenuOpen(p => !p)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`z-999 md:hidden overflow-hidden transition-all duration-500 ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="px-6 py-4 flex flex-col gap-4 ${isDark ? 'bg-ink-900/95' : 'bg-cream-50/90'} backdrop-blur-xl border-t border-white/5">
          {NAV_LINKS.map(link => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                className={`font-sans text-sm font-medium transition-colors ${
                  active === link.id ? 'text-accent' : 'opacity-70 hover:opacity-100'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button onClick={() => scrollTo('contact')} className="btn-primary text-xs px-4 py-2 mt-2">
              Get in Touch
            </button>
          </li>
        </ul>
      </div>
    </header>
  )
}
