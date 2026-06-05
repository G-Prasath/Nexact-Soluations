import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

/*
  ⚡ REPLACE THESE WITH REAL CLIENT TESTIMONIALS FROM YOUR OLD SITE
  Each entry: name, role, initials, color, text
*/
const TESTIMONIALS = [
  {
    name: 'Mr. Francis Anandaraj',
    role: 'Interworld Line',
    initials: 'FA',
    color: '#c9a96e',
    text: "Delivered a professional website that clearly showcases our logistics services and strengthens our global business presence."
  },
  {
    name: 'Mr. Kumar Gurusamy',
    role: 'Almericus Inc.',
    initials: 'KG',
    color: '#7eb8a0',
    text: "Delivered a clean and modern marketing website that clearly represents our brand and strengthens online presence.",
  },
  {
    name: 'Mr. Arulnidhi Panneerselvam',
    role: 'Selvalakshmi Foundation',
    initials: 'AP',
    color: '#a07eb8',
    text: "Created a meaningful organization website that clearly communicates our mission and supports community outreach.",
  },
  {
    name: 'Sridhar Anand',
    role: 'HR Manager, POS Client',
    initials: 'SA',
    color: '#6ea8c9',
    text: "The payslip generator Prasath developed completely eliminated our monthly manual process. What used to take our HR team 3 hours now happens in minutes. The Excel-to-PDF workflow is flawless and our staff actually enjoy using it.",
  },
]

function Stars() {
  return <div className="flex gap-1">{[...Array(5)].map((_,i) => <span key={i} className="text-accent text-sm">★</span>)}</div>
}

export default function Testimonials() {
  const ref = useRef(null)
  const cardRef = useRef(null)
  const [current, setCurrent] = useState(0)
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.test-header',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9,
          scrollTrigger: { trigger: '.test-header', start: 'top 85%' } }
      )
      gsap.fromTo('.test-wrap',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1,
          scrollTrigger: { trigger: '.test-wrap', start: 'top 85%' } }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  const goTo = (idx) => {
    if (busy || idx === current) return
    setBusy(true)
    gsap.to(cardRef.current, { opacity: 0, y: -16, duration: 0.28, ease: 'power2.in',
      onComplete: () => {
        setCurrent(idx)
        gsap.fromTo(cardRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.36, ease: 'power2.out',
          onComplete: () => setBusy(false) })
      }
    })
  }
  const prev = () => goTo((current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const next = () => goTo((current + 1) % TESTIMONIALS.length)
  const t = TESTIMONIALS[current]

  return (
    <section ref={ref} id="testimonials" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="test-header text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-px bg-accent" />
            <span className="font-mono text-xs text-accent tracking-[0.2em] uppercase">03 — Clients</span>
            <span className="w-10 h-px bg-accent" />
          </div>
          <h2 className="section-title">
            Testimonial<br />
            <em className="not-italic gradient-gold clip-text">say about me</em>
          </h2>
        </div>

        <div className="test-wrap">
          <div ref={cardRef} className="card p-8 md:p-12 relative overflow-hidden mb-7">
            {/* Colour wash */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-[0.04] transition-colors duration-700"
              style={{ background: t.color }} />

            <Quote className="text-accent/15 mb-5" size={44} />

            <blockquote className="font-display text-lg md:text-xl leading-relaxed mb-8 opacity-85">
              "{t.text}"
            </blockquote>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full flex items-center justify-center font-display font-bold text-ink-950 text-sm flex-shrink-0"
                  style={{ background: t.color }}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-sans font-semibold text-sm">{t.name}</div>
                  <div className="font-sans text-xs opacity-50">{t.role}</div>
                </div>
              </div>
              <Stars />
            </div>
          </div>

          {/* Nav */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {TESTIMONIALS.map((tt, i) => (
                <button key={i} onClick={() => goTo(i)} aria-label={`Review ${i+1}`}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-xs transition-all duration-300 ${
                    current === i ? 'scale-110 shadow-lg text-ink-950' : 'opacity-35 hover:opacity-65 bg-white/5'
                  }`}
                  style={current === i ? { background: tt.color } : {}}>
                  {tt.initials}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={prev} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-accent/40 hover:text-accent transition-all"><ChevronLeft size={17} /></button>
              <button onClick={next} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-accent/40 hover:text-accent transition-all"><ChevronRight size={17} /></button>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-10 grid grid-cols-3 gap-4">
          {[
            { val: '4.9',  label: 'Avg Rating',       sub: 'across all reviews' },
            { val: '100%', label: 'On-time Delivery',  sub: '5 projects shipped' },
            { val: '5+',   label: 'Projects Built',    sub: 'frontend & full stack' },
          ].map(s => (
            <div key={s.label} className="card p-5 text-center">
              <div className="font-display text-3xl font-bold gradient-gold clip-text">{s.val}</div>
              <div className="font-sans text-sm font-medium mt-1">{s.label}</div>
              <div className="font-sans text-xs opacity-40 mt-0.5">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
