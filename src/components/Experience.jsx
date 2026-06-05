import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const EXPERIENCE = [
  {
    role: 'Web Development',
    company: 'E-Star',
    type: 'Full-time',
    period: 'April 2024 — Jan 2025',
    duration: '~10 months',
    location: 'Offline',
    highlights: [
      'Custom websites and web applications built with modern technologies for speed, security, and scalability.',
    ],
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Git', 'REST APIs'],
  },
  {
    role: 'Frontend Development',
    company: 'Mekark',
    type: 'Full-time',
    period: 'Feb 2023 — Feb 2024',
    duration: '1 year',
    location: 'Offline',
    highlights: [
      'Responsive and user-friendly interfaces that deliver exceptional user experiences across all devices.',
    ],
    tech: ['Bootstrap 5', 'HTML5', 'CSS3', 'JavaScript', 'SEO Optimisation'],
  },
  {
    role: 'Backend Development',
    company: 'Networking Lab',
    type: 'Training',
    period: 'June 2025 — Aug 2025',
    duration: '3 months',
    location: 'In-person',
    highlights: [
      'Robust APIs, databases, and server-side systems designed for performance and reliability.',
    ],
    tech: ['Cisco Packet Tracer', 'OSPF', 'RIP', 'DHCP', 'Routers', 'L2 Switches'],
  },
  {
    role: 'Business Automation',
    company: 'Networking Lab',
    type: 'Training',
    period: 'June 2025 — Aug 2025',
    duration: '3 months',
    location: 'In-person',
    highlights: [
      'Automating repetitive tasks and workflows to increase productivity and reduce operational costs.',
    ],
    tech: ['Cisco Packet Tracer', 'OSPF', 'RIP', 'DHCP', 'Routers', 'L2 Switches'],
  },
  {
    role: 'Startup Technology Solutions',
    company: 'Networking Lab',
    type: 'Training',
    period: 'June 2025 — Aug 2025',
    duration: '3 months',
    location: 'In-person',
    highlights: [
      'From MVP development to full-scale platforms, we help startups turn ideas into successful products.',
    ],
    tech: ['Cisco Packet Tracer', 'OSPF', 'RIP', 'DHCP', 'Routers', 'L2 Switches'],
  },
    {
    role: 'Maintenance & Support',
    company: 'Networking Lab',
    type: 'Training',
    period: 'June 2025 — Aug 2025',
    duration: '3 months',
    location: 'In-person',
    highlights: [
      'Continuous monitoring, updates, bug fixes, and technical support to keep your systems running smoothly.',
    ],
    tech: ['Cisco Packet Tracer', 'OSPF', 'RIP', 'DHCP', 'Routers', 'L2 Switches'],
  },
]

export default function Experience() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.exp-header',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9,
          scrollTrigger: { trigger: '.exp-header', start: 'top 85%' } }
      )
      gsap.fromTo('.exp-item',
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: '.exp-timeline', start: 'top 80%' } }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} id="experience" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="exp-header mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-px bg-accent" />
            <span className="font-mono text-xs text-accent tracking-[0.2em] uppercase">02 — Services</span>
          </div>
          <h2 className="section-title">
            What we do<br />
            <em className="not-italic gradient-gold clip-text">grown & delivered</em>
          </h2>
        </div>

        <div className="exp-timeline relative">
          {/* Vertical accent line */}
          <div className="absolute left-0 md:left-[190px] top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent/10 to-transparent" />

          <div className="space-y-10">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="exp-item relative grid md:grid-cols-[190px_1fr] gap-6 md:gap-10">
                {/* Date column */}
                <div className="hidden md:block text-right pr-10 pt-1 space-y-1">
                  {/* <div className="font-mono text-xs text-accent/70">{exp.period}</div>
                  <div className="font-mono text-xs opacity-35">{exp.duration}</div>
                  <div className="font-sans text-xs opacity-35">{exp.location}</div> */}
                </div>

                {/* Timeline dot */}
                <div className="hidden md:block absolute left-[190px] top-2 w-3 h-3 rounded-full bg-accent border-2 border-ink-950 -translate-x-1/2 shadow-lg shadow-accent/30" />

                {/* Card */}
                <div className="card p-7 group hover:border-accent/20">
                  <div className="md:hidden flex items-center gap-2 mb-3">
                    {/* <span className="font-mono text-xs text-accent/70">{exp.period}</span> */}
                    {/* <span className="font-mono text-xs opacity-35">· {exp.duration}</span> */}
                  </div>

                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-display text-xl font-bold group-hover:text-accent transition-colors">{exp.role}</h3>
                      {/* <p className="font-sans text-sm opacity-65 mt-0.5">{exp.company}</p> */}
                    </div>
                    {/* <span className="tag text-xs">{exp.type}</span> */}
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex gap-3 text-sm opacity-65 leading-relaxed">
                        <span className="text-accent mt-1 flex-shrink-0 text-xs">▸</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {exp.tech.map(t => (
                      <span key={t} className="font-mono text-xs opacity-50 bg-white/4 px-2.5 py-1 rounded-full">{t}</span>
                    ))}
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        {/* <div className="mt-16 grid md:grid-cols-2 gap-5">
          {[
            { degree: 'MSc Computer Science', uni: 'Bharathidasan University, Trichy', year: '2017–2019', gpa: '7.20' },
            { degree: 'BSc Computer Science', uni: 'Bharathidasan University, Trichy', year: '2014–2017', gpa: '7.52' },
          ].map(e => (
            <div key={e.degree} className="card p-6 flex items-center justify-between gap-4">
              <div>
                <div className="tag mb-2">Education</div>
                <h3 className="font-display text-lg font-semibold">{e.degree}</h3>
                <p className="font-sans text-sm opacity-55 mt-1">{e.uni} · {e.year}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="font-display text-2xl font-bold text-accent">{e.gpa}</div>
                <div className="font-mono text-xs opacity-40">CGPA</div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  )
}
