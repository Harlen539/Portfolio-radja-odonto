import { motion } from 'framer-motion'
import { getSiteData } from '../data/siteData'
import { useLanguage } from '../context/languageContext'

export function About() {
  const { language, copy } = useLanguage()
  const { values } = getSiteData(language)

  return (
    <section className="about section-shell" id="sobre">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55 }}
      >
        <span className="eyebrow">{copy.about.eyebrow}</span>
        <h2>{copy.about.title}</h2>
      </motion.div>

      <div className="about__grid">
        <motion.div
          className="about__content"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <p>{copy.about.text}</p>

          <div className="value-grid">
            {values.map(({ title, icon: Icon }) => (
              <article className="value-card" key={title}>
                <Icon size={22} strokeWidth={1.55} aria-hidden="true" />
                <span>{title}</span>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
