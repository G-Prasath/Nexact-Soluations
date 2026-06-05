import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SKILL_GROUPS = [
  {
    category: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React JS',          level: 88 },
      { name: 'JavaScript (ES6+)', level: 85 },
      { name: 'Tailwind CSS',      level: 90 },
      { name: 'HTML5 + CSS3',      level: 92 },
      { name: 'Context API',       level: 80 },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js / Express', level: 82 },
      { name: 'PHP',               level: 78 },
      { name: 'RESTful APIs',      level: 85 },
      { name: 'Python',            level: 70 },
      { name: 'Prisma ORM',        level: 72 },
    ],
  },
  {
    category: 'Database & Tools',
    icon: '🗄️',
    skills: [
      { name: 'MongoDB',           level: 82 },
      { name: 'MySQL / RDBMS',     level: 78 },
      { name: 'SQLite',            level: 72 },
      { name: 'Git / GitHub',      level: 88 },
      { name: 'Postman',           level: 80 },
    ],
  },
]

const TECH_PILLS = [
  'React JS','Next.js','Vite','Node.js','Express.js','PHP',
  'MongoDB','MySQL','SQLite','Tailwind CSS','Context API',
  'Prisma','Git','GitHub','Postman','Linux','Python','CCNA',
]

export default function Skills() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.skills-header',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9,
          scrollTrigger: { trigger: '.skills-header', start: 'top 85%' } }
      )
      gsap.fromTo('.skill-group',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.18,
          scrollTrigger: { trigger: '.skills-grid', start: 'top 80%' } }
      )
      gsap.utils.toArray('.skill-bar').forEach(bar => {
        gsap.fromTo(bar, { width: '0%' }, {
          width: `${bar.dataset.level}%`,
          duration: 1.3, ease: 'power3.out',
          scrollTrigger: { trigger: bar, start: 'top 92%' },
        })
      })
      gsap.fromTo('.tech-pill',
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.45, stagger: 0.035,
          scrollTrigger: { trigger: '.tech-pills', start: 'top 88%' } }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} id="skills" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* <div className="skills-header text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-px bg-accent" />
            <span className="font-mono text-xs text-accent tracking-[0.2em] uppercase">02 — Skills</span>
            <span className="w-10 h-px bg-accent" />
          </div>
          <h2 className="section-title">
            Technical <em className="not-italic gradient-gold clip-text">expertise</em>
          </h2>
          <p className="font-sans text-sm opacity-55 mt-3 max-w-md mx-auto">
            Languages, frameworks and tools I use to ship production-grade software every day.
          </p>
        </div> */}

        {/* <div className="skills-grid grid md:grid-cols-3 gap-7 mb-14">
          {SKILL_GROUPS.map(group => (
            <div key={group.category} className="skill-group card p-6 space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-xl">{group.icon}</span>
                <h3 className="font-display font-semibold text-lg text-accent">{group.category}</h3>
              </div>
              <div className="space-y-4">
                {group.skills.map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="font-sans text-sm font-medium opacity-80">{skill.name}</span>
                      <span className="font-mono text-xs text-accent">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <div
                        className="skill-bar h-full rounded-full bg-gradient-to-r from-accent-dark to-accent"
                        data-level={skill.level}
                        style={{ width: 0 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div> */}

        {/* Courses completed */}
        <div className="mb-12 card p-6">
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-xs text-accent tracking-[0.15em] uppercase">Transforming Ideas into Digital Success.</span>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { name: 'Our Vision', year: '2025', desc: 'To become a trusted technology partner for businesses worldwide by delivering innovative digital solutions that create measurable value.' },
              { name: 'Our Mission', year: '2024', desc: 'To empower businesses with modern technology, automation, and software solutions that drive efficiency, growth, and long-term success.' },
              { name: 'Our Core Values', year: '2024', desc: 'Our clients growth and success are at the center of everything we do.' },
            ].map(c => (
              <div key={c.name} className="bg-white/3 rounded-xl p-4 border border-white/5">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-display font-semibold text-md">{c.name}</span>
                  <span className="font-mono text-xs text-accent opacity-70">{c.year}</span>
                </div>
                <p className="font-sans text-sm opacity-50 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech pill cloud */}
        {/* <div className="tech-pills flex flex-wrap gap-3 justify-center">
          {TECH_PILLS.map(t => (
            <span key={t} className="tech-pill tag text-sm py-1.5 px-4 cursor-default hover:bg-accent/20 transition-colors">
              {t}
            </span>
          ))}
        </div> */}
      </div>
    </section>
  )
}
