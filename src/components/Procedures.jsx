import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, X } from 'lucide-react'
import { Card } from './Card'
import { procedures } from '../data/siteData'

export function Procedures() {
  const carouselRef = useRef(null)
  const [currentProcedure, setCurrentProcedure] = useState(0)
  const [selectedProcedure, setSelectedProcedure] = useState(null)

  const scrollProcedure = (direction) => {
    const carousel = carouselRef.current

    if (!carousel) {
      return
    }

    const card = carousel.querySelector('.procedure-card')
    const gap = Number.parseFloat(getComputedStyle(carousel).columnGap) || 0
    const cardWidth = card?.getBoundingClientRect().width || carousel.clientWidth
    const amount = cardWidth + gap
    const nextIndex =
      direction === 'next' ? currentProcedure + 1 : currentProcedure - 1
    const clampedIndex = Math.max(
      0,
      Math.min(procedures.length - 1, nextIndex),
    )

    carousel.scrollTo({
      left: clampedIndex * amount,
      behavior: 'smooth',
    })
    setCurrentProcedure(clampedIndex)
  }

  useEffect(() => {
    const carousel = carouselRef.current

    if (!carousel) {
      return undefined
    }

    const updateCurrentProcedure = () => {
      const card = carousel.querySelector('.procedure-card')
      const gap = Number.parseFloat(getComputedStyle(carousel).columnGap) || 0
      const cardWidth =
        card?.getBoundingClientRect().width || carousel.clientWidth
      const amount = cardWidth + gap
      const nextIndex = Math.round(carousel.scrollLeft / amount)

      setCurrentProcedure(Math.max(0, Math.min(procedures.length - 1, nextIndex)))
    }

    carousel.addEventListener('scroll', updateCurrentProcedure, { passive: true })
    window.addEventListener('resize', updateCurrentProcedure)
    updateCurrentProcedure()

    return () => {
      carousel.removeEventListener('scroll', updateCurrentProcedure)
      window.removeEventListener('resize', updateCurrentProcedure)
    }
  }, [])

  useEffect(() => {
    if (!selectedProcedure) {
      return undefined
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedProcedure(null)
      }
    }

    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [selectedProcedure])

  return (
    <section className="procedures section-shell" id="procedimentos">
      <div className="section-heading">
        <span className="eyebrow">Áreas de estudo</span>
        <h2>Procedimentos</h2>
        <p>
          Vivências acadêmicas e interesses clínicos que fazem parte da minha
          formação em odontologia.
        </p>
      </div>

      <div className="procedure-carousel">
        {currentProcedure > 0 ? (
          <button
            className="procedure-carousel__control procedure-carousel__control--prev"
            type="button"
            aria-label="Ver procedimento anterior"
            onClick={() => scrollProcedure('prev')}
          >
            <ArrowLeft size={26} strokeWidth={2.4} aria-hidden="true" />
          </button>
        ) : null}

        <div className="procedure-grid" ref={carouselRef}>
          {procedures.map((procedure) => (
            <Card
              key={procedure.title}
              title={procedure.title}
              text={procedure.description}
              icon={procedure.icon}
              className="procedure-card"
              ariaLabel={`Abrir detalhes de ${procedure.title}`}
              onClick={() => setSelectedProcedure(procedure)}
            />
          ))}
        </div>

        {currentProcedure < procedures.length - 1 ? (
          <button
            className="procedure-carousel__control procedure-carousel__control--next"
            type="button"
            aria-label="Ver próximo procedimento"
            onClick={() => scrollProcedure('next')}
          >
            <ArrowRight size={26} strokeWidth={2.4} aria-hidden="true" />
          </button>
        ) : null}
      </div>

      <AnimatePresence>
        {selectedProcedure ? (
          <motion.div
            className="procedure-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="procedure-modal-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProcedure(null)}
          >
            <motion.div
              className="procedure-modal__content"
              initial={{ opacity: 0, scale: 0.88, y: 34 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 24 }}
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="procedure-modal__close"
                type="button"
                aria-label="Fechar detalhes do procedimento"
                onClick={() => setSelectedProcedure(null)}
              >
                <X size={20} strokeWidth={2.2} aria-hidden="true" />
              </button>

              <div className="procedure-modal__icon" aria-hidden="true">
                <img src={selectedProcedure.icon} alt="" />
              </div>

              <span className="eyebrow">Procedimento</span>
              <h3 id="procedure-modal-title">{selectedProcedure.title}</h3>
              <p>{selectedProcedure.description}</p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  )
}
