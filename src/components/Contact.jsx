import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const ref = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', project: '', message: '' })
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-header',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9,
          scrollTrigger: { trigger: '.contact-header', start: 'top 85%' } }
      )
      gsap.fromTo('.contact-left',
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1,
          scrollTrigger: { trigger: '.contact-grid', start: 'top 80%' } }
      )
      gsap.fromTo('.contact-right',
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1,
          scrollTrigger: { trigger: '.contact-grid', start: 'top 80%' } }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))
  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    await new Promise(r => setTimeout(r, 1400))
    setStatus('sent')
  }

  const inputClass = "w-full bg-ink-800/60 border border-white/8 rounded-xl px-4 py-3 font-sans text-sm placeholder:opacity-30 focus:outline-none focus:border-accent/50 focus:bg-ink-700/60 transition-all duration-300"

  return (
    <section ref={ref} id="contact" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="contact-header text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-px bg-accent" />
            <span className="font-mono text-xs text-accent tracking-[0.2em] uppercase">04 — Contact</span>
            <span className="w-10 h-px bg-accent" />
          </div>
          <h2 className="section-title">
            Let's build something<br />
            <em className="not-italic gradient-gold clip-text">great together</em>
          </h2>
          <p className="font-sans text-sm opacity-55 mt-4 max-w-md mx-auto">
            I'm actively looking for new opportunities — freelance, full-time or contract. Let's connect and discuss your project.
          </p>
        </div>

        <div className="contact-grid grid lg:grid-cols-[1fr_1.4fr] gap-9">
          {/* Info */}
          <div className="contact-left space-y-5">
            <div className="card p-7 space-y-5">
              <h3 className="font-display text-xl font-bold">Get in Touch</h3>
              {[
                { icon: Mail,   label: 'Email',    value: 'guruprasathmsc@gmail.com', href: 'mailto:guruprasathmsc@gmail.com' },
                { icon: Phone,  label: 'Phone',    value: '+91 80155 44372',           href: 'tel:+918015544372' },
                { icon: MapPin, label: 'Location', value: 'Tamil Nadu, India',         href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex gap-4 items-center group">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                    <Icon size={16} />
                  </div>
                  <div>
                    <div className="font-mono text-xs opacity-40 uppercase tracking-wide">{label}</div>
                    {href
                      ? <a href={href} className="font-sans text-sm font-medium hover:text-accent transition-colors">{value}</a>
                      : <span className="font-sans text-sm font-medium">{value}</span>
                    }
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            {/* <div className="card p-6">
              <h3 className="font-display font-semibold mb-4">Follow My Work</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Github,   label: 'GitHub',   href: 'https://github.com/G-Prasath',  sub: 'G-Prasath' },
                  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/prasath264',   sub: 'V. Prasath' },
                ].map(({ icon: Icon, label, href, sub }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/3 hover:bg-accent/10 hover:text-accent border border-transparent hover:border-accent/20 transition-all text-center group">
                    <Icon size={20} className="opacity-70 group-hover:opacity-100" />
                    <span className="font-sans text-xs font-medium">{label}</span>
                    <span className="font-mono text-xs opacity-40">{sub}</span>
                  </a>
                ))}
              </div>
            </div> */}

            {/* Availability */}
            <div className="card p-5 border-accent/20 bg-accent/5">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                <div>
                  <div className="font-sans text-sm font-semibold">Currently Available</div>
                  <div className="font-sans text-xs opacity-55 mt-0.5">Open for full-time & freelance opportunities</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-right">
            <div className="card p-8">
              {status === 'sent' ? (
                <div className="flex flex-col items-center justify-center py-14 text-center gap-4">
                  <div className="text-5xl">🎉</div>
                  <h3 className="font-display text-2xl font-bold">Message Sent!</h3>
                  <p className="font-sans text-sm opacity-55 max-w-sm">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                  <button onClick={() => { setStatus('idle'); setForm({ name:'',email:'',project:'',message:'' }) }} className="btn-outline mt-3 text-sm">Send Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-display text-xl font-bold mb-5">Start a Conversation</h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs opacity-50 mb-2 uppercase tracking-wide">Your Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required placeholder="Karthik Selvam" className={inputClass} />
                    </div>
                    <div>
                      <label className="block font-mono text-xs opacity-50 mb-2 uppercase tracking-wide">Email *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="karthik@company.com" className={inputClass} />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs opacity-50 mb-2 uppercase tracking-wide">Project Type</label>
                    <select name="project" value={form.project} onChange={handleChange} className={inputClass + ' cursor-pointer'}>
                      <option value="">Select a service...</option>
                      <option>Full Stack Web Application</option>
                      <option>React Frontend Development</option>
                      <option>Node.js / PHP Backend API</option>
                      <option>Business / Landing Website</option>
                      <option>Database Design & Integration</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-xs opacity-50 mb-2 uppercase tracking-wide">Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                      placeholder="Tell me about your project, goals, timeline and budget..."
                      className={inputClass + ' resize-none'} />
                  </div>

                  <button type="submit" disabled={status === 'sending'}
                    className="btn-primary w-full justify-center group disabled:opacity-60 disabled:cursor-not-allowed">
                    {status === 'sending'
                      ? <><span className="animate-spin w-4 h-4 border-2 border-ink-900/30 border-t-ink-900 rounded-full" /> Sending...</>
                      : <><Send size={16} /> Send Message</>}
                  </button>

                  <p className="font-sans text-xs opacity-35 text-center">Typically reply within 24 hours · No spam, ever</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
