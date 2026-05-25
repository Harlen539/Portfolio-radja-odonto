import { motion } from 'framer-motion'
import { values } from '../data/siteData'

export function About() {
  return (
    <section className="about section-shell" id="sobre">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55 }}
      >
        <span className="eyebrow">Trajetória</span>
        <h2>Sobre mim</h2>
      </motion.div>

      <div className="about__grid">
        <motion.div
          className="about__content"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <p>
            Sou Radja Rodrigues, estudante de Odontologia no 7º período pela
            UNIPÊ, em João Pessoa/PB. Minha trajetória é guiada pelo cuidado,
            pela dedicação aos estudos e pelo desejo de transformar vidas
            através do sorriso. Busco evoluir constantemente, unindo
            conhecimento técnico, sensibilidade e responsabilidade em cada
            etapa da minha formação.
          </p>

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
