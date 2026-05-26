import { motion } from 'framer-motion'
import { Heart, Quote, Sparkles } from 'lucide-react'
import radjaProfile from '../assets/radja-profile.jpg'
import { getSiteData } from '../data/siteData'
import { useLanguage } from '../context/languageContext'

function ToothOutline() {
  return (
    <svg viewBox="0 0 110 130" aria-hidden="true">
      <path
        d="M55 9c-18.2 0-35 14.2-35 34.4 0 15.6 8.2 25 14.5 36.4 4.2 7.6 6.3 16.2 8 25.2.7 3.7 5.9 3.9 6.9.3l4.8-17.1c.6-2.4 4-2.4 4.7 0l5 17.2c1 3.5 6.1 3.3 6.8-.3 1.7-9.1 4-17.8 8.2-25.4 6.3-11.3 13.4-20.6 13.4-36.2C92.3 23.2 75.1 9 56.9 9H55Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Hero() {
  const { language, copy } = useLanguage()
  const { profile } = getSiteData(language)

  return (
    <section className="hero-section section-shell" id="inicio">
      <div className="hero-section__decor hero-section__decor--tooth">
        <ToothOutline />
      </div>
      <div className="hero-section__decor hero-section__decor--spark">
        <Sparkles size={32} strokeWidth={1.2} />
      </div>

      <div className="hero-section__content">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="eyebrow">{copy.hero.eyebrow}</span>
          <h1>{profile.name}</h1>
        </motion.div>

        <motion.div
          className="hero-portrait"
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15, ease: 'easeOut' }}
        >
          <div className="hero-portrait__ring">
            <img
              src={radjaProfile}
              alt={copy.hero.imageAlt}
            />
          </div>
          <span className="hero-portrait__dot hero-portrait__dot--top" />
          <span className="hero-portrait__dot hero-portrait__dot--bottom" />
          <Heart className="hero-portrait__heart" size={58} strokeWidth={1} />
        </motion.div>

        <motion.aside
          className="hero-quote"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.28, ease: 'easeOut' }}
        >
          <Quote size={28} strokeWidth={1.5} aria-hidden="true" />
          <p>{profile.highlight}</p>
        </motion.aside>
      </div>
    </section>
  )
}
