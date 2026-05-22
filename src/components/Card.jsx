import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function Card({
  title,
  text,
  href,
  cta,
  icon: Icon,
  children,
  className = '',
  onClick,
  ariaLabel,
}) {
  const external = href?.startsWith('http') || href?.startsWith('mailto:')
  const isImageIcon = typeof Icon === 'string'
  const interactive = typeof onClick === 'function'

  const handleKeyDown = (event) => {
    if (!interactive) {
      return
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onClick()
    }
  }

  return (
    <motion.article
      className={`card ${interactive ? 'card--interactive' : ''} ${className}`}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      aria-label={interactive ? ariaLabel : undefined}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      {Icon ? (
        <div
          className={`card__icon ${isImageIcon ? 'card__icon--image' : ''}`}
          aria-hidden="true"
        >
          {isImageIcon ? (
            <img className="card__icon-img" src={Icon} alt="" loading="lazy" />
          ) : (
            <Icon size={26} strokeWidth={1.45} />
          )}
        </div>
      ) : null}
      <h3>{title}</h3>
      <p>{text}</p>
      {children}
      {href && cta ? (
        <a
          className="card__link"
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noreferrer' : undefined}
        >
          <span>{cta}</span>
          <ArrowRight size={17} strokeWidth={1.8} aria-hidden="true" />
        </a>
      ) : null}
    </motion.article>
  )
}
