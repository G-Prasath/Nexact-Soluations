import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current

    const move = (e) => {
      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.1, ease: 'none' })
      gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.4, ease: 'power2.out' })
    }

    const enter = () => {
      gsap.to(ring, { scale: 2, opacity: 0.4, duration: 0.3 })
    }
    const leave = () => {
      gsap.to(ring, { scale: 1, opacity: 0.6, duration: 0.3 })
    }

    window.addEventListener('mousemove', move)
    document.querySelectorAll('a, button, [role="button"]').forEach(el => {
      el.addEventListener('mouseenter', enter)
      el.addEventListener('mouseleave', leave)
    })

    return () => {
      window.removeEventListener('mousemove', move)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="fixed top-0 left-0 w-2 h-2 rounded-full bg-accent pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference" />
      <div ref={ringRef} className="fixed top-0 left-0 w-8 h-8 rounded-full border border-accent/60 pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2" style={{ opacity: 0.6 }} />
    </>
  )
}
