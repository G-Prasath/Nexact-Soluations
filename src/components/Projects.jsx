import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const PROJECTS = [
  {
    id: 1,
    title: 'Food Court — Food Order App',
    category: 'Full Stack',
    year: '2024',
    description:
      'A full-featured online food ordering platform with user authentication, product listing, cart management, order summary and an admin panel for complete user and order data management.',
    tech: ['React', 'Tailwind CSS', 'Context API', 'Node.js', 'Express.js', 'MongoDB'],
    color: '#c9a96e',
    emoji: '🍽️',
    metrics: ['Admin Panel', 'Cart & Orders', 'Auth System'],
    github: 'https://github.com/guruprasathmsc',
    live: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Inbuilt Infra — Business Website',
    category: 'Frontend',
    year: '2023',
    description:
      'A professional industrial business website with unique, SEO-optimised UI. Built with React + Vite for blazing performance and integrated Nodemailer for direct email enquiry functionality.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'Nodemailer'],
    color: '#7eb8a0',
    emoji: '🏗️',
    metrics: ['SEO Optimised', 'Email Integration', 'Responsive UI'],
    github: 'https://github.com/guruprasathmsc',
    live: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'POS — Point of Sale System',
    category: 'Full Stack',
    year: '2024',
    description:
      'A complete Point of Sale system for managing billing, products and sales transactions with real-time order processing, invoice generation and sales reporting.',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'MySQL'],
    color: '#a07eb8',
    emoji: '🧾',
    metrics: ['Real-time Billing', 'Invoice Generator', 'Sales Reports'],
    github: 'https://github.com/guruprasathmsc',
    live: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'Payslip Auto Generator',
    category: 'Backend / PHP',
    year: '2023',
    description:
      'An automated payslip generation system that reads employee data from Excel files, processes the inputs and produces downloadable PDF payslips — removing manual HR effort entirely.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'Rapid API'],
    color: '#6ea8c9',
    emoji: '📄',
    metrics: ['Excel → PDF', 'Auto Generation', 'Download Ready'],
    github: 'https://github.com/guruprasathmsc',
    live: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'Inter-Domain Routing — DHCP Network',
    category: 'Networking',
    year: '2025',
    description:
      'A simulated enterprise network integrating RIP and OSPF routing protocols across separate domains with protocol redistribution for cross-domain communication and a centralised DHCP server for dynamic IP management.',
    tech: ['Cisco Routers', 'L2 Switches', 'DHCP Server', 'OSPF', 'RIP', 'Packet Tracer'],
    color: '#c96e7e',
    emoji: '🌐',
    metrics: ['Hybrid Routing', 'DHCP Automation', 'OSPF + RIP'],
    github: '#',
    live: '#',
    featured: false,
  },
]

export default function Projects() {
  const ref = useRef(null)
  const [active, setActive] = useState(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.projects-header',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9,
          scrollTrigger: { trigger: '.projects-header', start: 'top 85%' } }
      )
      gsap.fromTo('.project-card',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: '.projects-grid', start: 'top 80%' } }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">

        <div className="projects-header flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-px bg-accent" />
              <span className="font-mono text-xs text-accent tracking-[0.2em] uppercase">03 — Work</span>
            </div>
            <h2 className="section-title">
              Things I've<br />
              <em className="not-italic gradient-gold clip-text">built & shipped</em>
            </h2>
          </div>
          <p className="font-sans text-sm opacity-55 max-w-xs md:text-right">
            From food ordering platforms to networking simulations — a mix of frontend, full-stack and infrastructure work.
          </p>
        </div>

        <div className="projects-grid space-y-5">
          {/* Featured large cards */}
          <div className="grid md:grid-cols-2 gap-5">
            {PROJECTS.filter(p => p.featured).map(p => (
              <div key={p.id}
                className="project-card card p-8 group cursor-pointer relative overflow-hidden"
                onMouseEnter={() => setActive(p.id)}
                onMouseLeave={() => setActive(null)}
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg,transparent,${p.color},transparent)`, opacity: active === p.id ? 1 : 0.3 }} />

                <div className="flex items-start justify-between mb-5">
                  <div>
                    <span className="text-3xl">{p.emoji}</span>
                    <div className="flex items-center gap-2 mt-3">
                      <span className="tag text-xs">{p.category}</span>
                      <span className="font-mono text-xs opacity-40">{p.year}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-accent/40 hover:text-accent transition-all" aria-label="GitHub">
                      <Github size={14} />
                    </a>
                    <a href={p.live}
                      className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-accent/40 hover:text-accent transition-all" aria-label="Live">
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-accent transition-colors">{p.title}</h3>
                <p className="font-sans text-sm leading-relaxed opacity-60 mb-5">{p.description}</p>

                <div className="grid grid-cols-3 gap-2 mb-5">
                  {p.metrics.map(m => (
                    <div key={m} className="bg-white/3 rounded-lg p-2 text-center">
                      <div className="font-mono text-xs text-accent/80 leading-tight">{m}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {p.tech.map(t => (
                    <span key={t} className="font-mono text-xs opacity-50 bg-white/4 px-2.5 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Smaller cards */}
          <div className="grid md:grid-cols-3 gap-5">
            {PROJECTS.filter(p => !p.featured).map(p => (
              <div key={p.id} className="project-card card p-6 group cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: `linear-gradient(90deg,transparent,${p.color},transparent)`, opacity: 0.4 }} />

                <div className="flex items-start justify-between mb-4">
                  <span className="text-2xl">{p.emoji}</span>
                  <div className="flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                      className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center hover:text-accent transition-colors" aria-label="GitHub">
                      <Github size={12} />
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="tag text-xs">{p.category}</span>
                  <span className="font-mono text-xs opacity-40">{p.year}</span>
                </div>

                <h3 className="font-display text-lg font-bold mb-2 group-hover:text-accent transition-colors">{p.title}</h3>
                <p className="font-sans text-xs leading-relaxed opacity-55 mb-4">{p.description}</p>

                <div className="flex flex-wrap gap-1.5">
                  {p.tech.slice(0, 3).map(t => (
                    <span key={t} className="font-mono text-xs opacity-45 bg-white/4 px-2 py-0.5 rounded-full">{t}</span>
                  ))}
                  {p.tech.length > 3 && (
                    <span className="font-mono text-xs opacity-45 bg-white/4 px-2 py-0.5 rounded-full">+{p.tech.length - 3}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <a href="https://github.com/guruprasathmsc" target="_blank" rel="noopener noreferrer" className="btn-outline group text-sm">
            See all on GitHub
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
