import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Github, Linkedin, Mail, Download, ArrowDownRight } from 'lucide-react'
const SOCIAL = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/G-Prasath' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/prasath264' },
  { icon: Mail, label: 'Email', href: 'mailto:guruprasathmsc@gmail.com' },
]

export default function Hero({ isDark}) {
  const wrapRef = useRef(null)
  const circleRef = useRef(null)  

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
      tl.fromTo('.hero-eyebrow', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.4 })
        .fromTo('.hero-name',    { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2 }, '-=0.6')
        .fromTo('.hero-role',    { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1   }, '-=0.8')
        .fromTo('.hero-desc',    { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, '-=0.7')
        .fromTo('.hero-actions', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.6')
        .fromTo('.hero-social',  { x: -20, opacity: 0 },{ x: 0, opacity: 1, duration: 0.8, stagger: 0.1 }, '-=0.5')
        .fromTo('.hero-stat',    { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 }, '-=0.4')
        .fromTo('.hero-visual',  { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2, ease: 'back.out(1.2)' }, '-=1.2')

      gsap.to(circleRef.current, {
        rotation: 360, duration: 22, repeat: -1, ease: 'none', transformOrigin: 'center center',
      })

      const onMove = (e) => {
        const dx = (e.clientX / window.innerWidth  - 0.5) * 28
        const dy = (e.clientY / window.innerHeight - 0.5) * 28
        gsap.to('.hero-visual', { x: dx, y: dy, duration: 1.6, ease: 'power2.out' })
      }
      window.addEventListener('mousemove', onMove)
      return () => window.removeEventListener('mousemove', onMove)
    }, wrapRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={wrapRef} id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      {/* Background glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-accent/3 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 opacity-[0.02]"
          style={{ backgroundImage: 'linear-gradient(currentColor 1px,transparent 1px),linear-gradient(90deg,currentColor 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">

        {/* ── LEFT TEXT ── */}
        <div className="space-y-7">
          <div className="hero-eyebrow gsap-init flex items-center gap-3">
            <span className="w-10 h-px bg-accent" />
            <span className="font-mono text-xs text-accent tracking-[0.2em] uppercase">Welcom to</span>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          </div>

          <div>
            <h1 className="hero-name gsap-init font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Nexact Soluation
            </h1>
            <h1 className="hero-name gsap-init font-display text-3xl md:text-4xl font-bold leading-tight mt-1">
              <span className="gradient-gold clip-text">Full&nbsp;Stack&nbsp;Developer</span>
            </h1>
            <p className="hero-role gsap-init mt-3 font-sans text-lg md:text-md font-light opacity-65">
              Website · Web Apps · Automations · Maintaine
            </p>
          </div>

          <p className="hero-desc gsap-init font-sans text-base leading-relaxed opacity-60 max-w-lg text-balance">
            At Nexact Solution, we help businesses transform their ideas into powerful digital solutions. From modern websites and web applications to business automation systems and ongoing technical support, we provide end-to-end technology services that help companies grow faster and operate more efficiently.
          </p>

          {/* <div className="hero-actions gsap-init flex flex-wrap gap-4">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary group"
            >
              View My Projects
              <ArrowDownRight size={16} className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
            </button>
            <a href="/V_PRASATH_RESUME.pdf" download className="btn-outline group">
              <Download size={16} />
              Download CV
            </a>
          </div> */}

          {/* Socials */}
          {/* <div className="flex items-center gap-4">
            {SOCIAL.map(({ icon: Icon, label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="hero-social gsap-init w-10 h-10 rounded-full border border-white/10 flex items-center justify-center opacity-50 hover:opacity-100 hover:border-accent/40 hover:text-accent transition-all duration-300">
                <Icon size={16} />
              </a>
            ))}
            <a href="tel:+918015544372"
              className="hero-social gsap-init font-mono text-xs text-accent/60 hover:text-accent transition-colors">
              +91 80155 44372
            </a>
          </div> */}

          {/* Stats */}
          <div className="flex gap-8 pt-4 border-t border-white/5">
            {[
              { value: '3+', label: 'Years Experience' },
              { value: '100%', label: 'client Satisfaction' },
              { value: 'MERN', label: 'Primary Stack' },
            ].map(s => (
              <div key={s.label} className="hero-stat gsap-init">
                <div className="font-display text-2xl font-bold text-accent">{s.value}</div>
                <div className="font-sans text-xs opacity-50 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT VISUAL ── */}
        <div className="hero-visual gsap-init hidden lg:flex items-center justify-center relative">
          <div className="relative w-80 h-80">
            {/* Orbit SVG */}
            <svg ref={circleRef} className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
              <circle cx="160" cy="160" r="148" fill="none" stroke="url(#g1)" strokeWidth="1" strokeDasharray="10 9" opacity="0.35" />
              <defs>
                <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#c9a96e" />
                  <stop offset="100%" stopColor="#a07840" />
                </linearGradient>
              </defs>
              <circle cx="160" cy="12"  r="5" fill="#c9a96e" opacity="0.9" />
              <circle cx="308" cy="160" r="4" fill="#c9a96e" opacity="0.55" />
              <circle cx="30"  cy="220" r="3" fill="#c9a96e" opacity="0.4" />
            </svg>

            {/* Avatar placeholder — replace src with real photo */}
            <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-accent/20 shadow-2xl ${isDark ? 'shadow-accent/10' : 'shadow-accent/50'}">
              {/* Gradient avatar */}
              <div className="w-full h-full ${isDark ? 'bg-gradient-to-br from-ink-700 via-ink-800 to-ink-900' : 'bg-accent/80'} flex flex-col items-center justify-center">
                <div className="font-display text-5xl font-bold gradient-gold">NA</div>
                <div className="font-mono text-xs ${isDark ? 'text-accent/90' : 'text-accent/50'} mt-2 tracking-[0.3em]">Soluations</div>
              </div>
            </div>

            {/* Floating tech badges */}
            {[
              { label: 'React',   cls: 'absolute -top-2 right-16', delay: 0 },
              { label: 'Node.js', cls: 'absolute bottom-2 -left-2', delay: 0.6 },
              { label: 'PHP',     cls: 'absolute top-14 -left-6',   delay: 1.1 },
              { label: 'MongoDB', cls: 'absolute bottom-10 -right-4', delay: 1.6 },
            ].map(b => (
              <div key={b.label} className={`${b.cls} tag animate-float`} style={{ animationDelay: `${b.delay}s` }}>
                {b.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-25">
        <span className="font-mono text-xs tracking-[0.2em]">SCROLL</span>
        <div className="w-px h-10 bg-current animate-pulse" />
      </div>
    </section>
  )
}
