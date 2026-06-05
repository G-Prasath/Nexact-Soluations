# V. Prasath — Portfolio

Modern, animated portfolio built with React 18 + Vite + Tailwind CSS + GSAP.

## Quick Start
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # Output: /dist (includes sitemap.xml + robots.txt)
```

## Stack
React 18 · Vite 5 · Tailwind CSS · GSAP ScrollTrigger · Lucide Icons

## Personalise
1. Add your photo: replace the VP avatar div in `src/components/About.jsx` and `Hero.jsx`
   with `<img src="/prasath.jpg" alt="V. Prasath" className="w-full h-full object-cover" />`
   and drop `prasath.jpg` in `public/`
2. Update hostname in `vite.config.js` (replace `https://vprasath.dev`)
3. Add CV: drop `V_Prasath_CV.pdf` in `public/`
4. Update social links in `Hero.jsx` and `Contact.jsx`
5. Replace testimonials with real quotes in `src/components/Testimonials.jsx`

## SEO
- Full meta tags, Open Graph, Twitter Card, JSON-LD structured data
- `robots.txt` and `sitemap.xml` auto-generated on build
- Target Lighthouse: Performance 95+ · Accessibility 100 · SEO 100
