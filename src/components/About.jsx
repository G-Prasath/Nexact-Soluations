import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TRAITS = [
  {
    icon: '⚡',
    title: 'Performance-Driven',
    text: 'I optimise every layer — from component renders to database queries — ensuring fast, smooth experiences that users notice.',
  },
  {
    icon: '🧩',
    title: 'Full-Stack Versatility',
    text: 'Equally comfortable building pixel-perfect React UIs, designing RESTful APIs in Node.js, or architecting PHP backend systems.',
  },
  {
    icon: '🔐',
    title: 'Security-Conscious',
    text: 'I integrate secure authentication, input validation, and best practices into every API and application I ship.',
  },
  {
    icon: '🚀',
    title: 'Continuous Learner',
    text: 'From CCNA networking to Python CLI tools — I invest in expanding my skills beyond the browser to become a more complete engineer.',
  },
]

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-left',
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: '.about-left', start: 'top 80%' } }
      )
      gsap.fromTo('.about-img',
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.about-img', start: 'top 80%' } }
      )
      gsap.fromTo('.about-trait',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.14, ease: 'power3.out',
          scrollTrigger: { trigger: '.about-traits', start: 'top 82%' } }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* ── TOP ROW: text left, image right ── */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">

          {/* Left — intro text */}
          <div className="about-left space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-px bg-accent" />
                <span className="font-mono text-xs text-accent tracking-[0.2em] uppercase">01 — About</span>
              </div>
              <h2 className="section-title text-4xl">
                Let's Build Something Great Together<br />
              </h2>
            </div>

            <p className="font-sans text-base leading-loose opacity-70">
              <strong className="text-accent font-semibold">Nexact Solution</strong> is a technology company specializing in Web Development, Frontend & Backend Engineering, Business Automation, Startup Solutions, and Software Maintenance. We help businesses build scalable digital products that drive growth, efficiency, and innovation.
            </p>

            <p className="font-sans text-base leading-loose opacity-70">
              Whether you need a website, business automation, custom software, or technical support, Nexact Solution is ready to help bring your vision to life.
            </p>

            {/* <div className="flex flex-wrap gap-3 pt-2">
              <span className="tag">MERN Stack</span>
              <span className="tag">RESTful APIs</span>
              <span className="tag">CCNA Certified 2025</span>
              <span className="tag">Open to Remote</span>
            </div> */}

            {/* Education pills */}
            {/* <div className="space-y-3 pt-2">
              {[
                { degree: 'MSc Computer Science', college: 'Bharathidasan University, Trichy', year: '2017–19', gpa: '7.20' },
                { degree: 'BSc Computer Science', college: 'Bharathidasan University, Trichy', year: '2014–17', gpa: '7.52' },
              ].map(e => (
                <div key={e.degree} className="card px-5 py-3 flex items-center justify-between gap-4">
                  <div>
                    <div className="font-sans text-sm font-semibold">{e.degree}</div>
                    <div className="font-sans text-xs opacity-50 mt-0.5">{e.college} · {e.year}</div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="font-display text-lg font-bold text-accent">{e.gpa}</div>
                    <div className="font-mono text-xs opacity-40">CGPA</div>
                  </div>
                </div>
              ))}
            </div> */}
          </div>

          {/* Right — avatar / photo block */}
          <div className="about-img flex items-center justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              {/* Main image frame */}
              <div className="w-full h-full rounded-3xl overflow-hidden border border-white/8 shadow-2xl shadow-accent/10">

                  <img src="/profile_pic.avif" alt="V. Prasath" className="w-full h-full object-cover" />
                
                <div className="w-full h-full bg-gradient-to-br from-ink-700 via-ink-800 to-ink-900 flex flex-col items-center justify-center gap-4">
                  <div className="font-display text-7xl font-bold gradient-gold clip-text">VP</div>
                  <div className="font-mono text-xs text-accent/40 tracking-[0.3em]">V. PRASATH</div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border border-accent/15 -z-10" />
              <div className="absolute -bottom-8 -right-8 w-full h-full rounded-3xl border border-accent/7 -z-20" />

              {/* Floating stat card */}
              <div className="absolute -bottom-5 -left-5 card px-4 py-3 shadow-xl">
                <div className="font-display text-xl font-bold text-accent">3+</div>
                <div className="font-sans text-xs opacity-55">Years of Experience</div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 card px-3 py-2 shadow-xl">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="font-mono text-xs text-accent">Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── TRAITS GRID ── */}
        <div className="about-traits grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TRAITS.map(t => (
            <div key={t.title} className="about-trait card p-6 group">
              <span className="text-2xl block mb-4">{t.icon}</span>
              <h3 className="font-display font-semibold text-base mb-2 group-hover:text-accent transition-colors">{t.title}</h3>
              <p className="font-sans text-xs leading-relaxed opacity-55">{t.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
