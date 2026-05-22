import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  FileText,
  GraduationCap,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  ScanLine,
  X,
} from 'lucide-react'

const filters = ['Todos', 'Documentação', 'Radiografia', 'Estética', 'Prevenção']

const filterIcons = {
  Documentação: FileText,
  Radiografia: ScanLine,
  Estética: Sparkles,
  Prevenção: ShieldCheck,
}

const clinicalCases = [
  {
    id: 'documentacao-clinica',
    category: 'Registro acadêmico',
    title: 'Documentação clínica',
    description:
      'Registro completo do caso com fotos intra e extraorais para acompanhamento visual e evolução do caso.',
    tag: 'Acadêmico',
    filter: 'Documentação',
    visual: 'documentation',
    objective:
      'Registrar informações visuais para acompanhamento acadêmico e análise da evolução clínica.',
    area: 'Documentação odontológica e diagnóstico inicial.',
    learning:
      'Importância da organização dos registros, padronização fotográfica e análise responsável.',
    note: 'Caso utilizado apenas para fins acadêmicos e demonstrativos.',
  },
  {
    id: 'estudo-radiografico',
    category: 'Análise orientada',
    title: 'Estudo radiográfico',
    description:
      'Análise estrutural, avaliação de tecidos e condições ósseas com interpretação inicial dos achados.',
    tag: 'Radiografia',
    filter: 'Radiografia',
    visual: 'xray',
    objective:
      'Compreender estruturas internas e interpretar achados radiográficos com orientação acadêmica.',
    area: 'Radiologia odontológica.',
    learning: 'Desenvolvimento da leitura técnica e da percepção diagnóstica.',
    note: 'Conteúdo demonstrativo sem finalidade de diagnóstico público.',
  },
  {
    id: 'planejamento-estetico',
    category: 'Antes e depois',
    title: 'Planejamento estético',
    description:
      'Análise da harmonia do sorriso e proposta de planejamento estético personalizado.',
    tag: 'Demonstrativo',
    filter: 'Estética',
    visual: 'aesthetic',
    objective: 'Estudar proporção, harmonia e planejamento visual do sorriso.',
    area: 'Dentística estética.',
    learning:
      'Importância do equilíbrio entre função, estética e individualidade do paciente.',
    note: 'Imagens com finalidade ilustrativa e acadêmica.',
  },
  {
    id: 'prevencao-odontologica',
    category: 'Saúde bucal',
    title: 'Prevenção odontológica',
    description:
      'Orientações preventivas, cuidados diários e acompanhamento da saúde bucal.',
    tag: 'Prevenção',
    filter: 'Prevenção',
    visual: 'prevention',
    objective:
      'Reforçar a importância dos cuidados preventivos na saúde bucal.',
    area: 'Promoção de saúde e prevenção.',
    learning:
      'Valorização da educação em saúde e do acompanhamento contínuo.',
    note: 'Conteúdo educativo e acadêmico.',
  },
]

function ToothIcon({ size = 24, strokeWidth = 1.8, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      aria-hidden="true"
      {...props}
    >
      <path d="M15.4 6.6c3.1-1.4 5.9.4 8.6.4s5.5-1.8 8.6-.4c4.9 2.2 6.6 8.1 4.5 14.3-1.1 3.3-2.8 6-3.5 10.4-.8 4.6-1.7 9.7-5 9.7-2.6 0-2.9-4.8-3.8-8.4-.3-1.2-.7-2.4-1.4-2.4s-1.1 1.2-1.4 2.4c-.9 3.6-1.2 8.4-3.8 8.4-3.3 0-4.2-5.1-5-9.7-.7-4.4-2.4-7.1-3.5-10.4-2.1-6.2-.4-12.1 4.5-14.3Z" />
      <path d="M20.8 11.7c1 .5 2 .8 3.2.8s2.2-.3 3.2-.8" />
    </svg>
  )
}

function CaseVisual({ type, title, large = false }) {
  return (
    <div
      className={`case-visual case-visual--${type} ${large ? 'case-visual--large' : ''}`}
      role="img"
      aria-label={`Ilustração odontológica de ${title}`}
    >
      <span />
      <span />
      <span />
      <span />
    </div>
  )
}

function CaseFilter({ activeFilter, onChange }) {
  return (
    <div className="case-filters" aria-label="Filtros de casos clínicos">
      {filters.map((filter) => {
        const Icon = filterIcons[filter]

        return (
          <button
            className={`case-filter ${activeFilter === filter ? 'is-active' : ''}`}
            type="button"
            key={filter}
            aria-pressed={activeFilter === filter}
            onClick={() => onChange(filter)}
          >
            {Icon ? <Icon size={18} strokeWidth={1.8} aria-hidden="true" /> : null}
            <span>{filter}</span>
          </button>
        )
      })}
    </div>
  )
}

function CaseCard({ item, index, onOpen }) {
  return (
    <motion.article
      className="case-card"
      layout
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.38, delay: index * 0.04 }}
    >
      <CaseVisual type={item.visual} title={item.title} />
      <div className="case-card__content">
        <span className="case-card__category">{item.category}</span>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <div className="case-card__footer">
          <span className="case-card__tag">
            <GraduationCap size={17} strokeWidth={1.7} aria-hidden="true" />
            {item.tag}
          </span>
          <button
            className="case-card__details"
            type="button"
            onClick={() => onOpen(item)}
            aria-label={`Ver detalhes de ${item.title}`}
          >
            Ver detalhes
            <ArrowRight size={18} strokeWidth={1.9} aria-hidden="true" />
          </button>
        </div>
      </div>
    </motion.article>
  )
}

function DetailCard({ icon: Icon, title, children }) {
  return (
    <div className="case-modal__info-card">
      <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
      <div>
        <strong>{title}</strong>
        <p>{children}</p>
      </div>
    </div>
  )
}

function CaseModal({ item, onClose }) {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      className="case-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-modal-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="case-modal__content"
        initial={{ opacity: 0, y: 34, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.96 }}
        transition={{ type: 'spring', stiffness: 240, damping: 24 }}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="case-modal__close"
          type="button"
          aria-label="Fechar detalhes do caso"
          onClick={onClose}
        >
          <X size={20} strokeWidth={2.2} aria-hidden="true" />
        </button>

        <CaseVisual type={item.visual} title={item.title} large />

        <div className="case-modal__body">
          <span className="case-card__category">{item.category}</span>
          <h3 id="case-modal-title">{item.title}</h3>
          <p className="case-modal__description">{item.description}</p>

          <div className="case-modal__info-grid">
            <DetailCard icon={BadgeCheck} title="Objetivo do estudo">
              {item.objective}
            </DetailCard>
            <DetailCard icon={ToothIcon} title="Área relacionada">
              {item.area}
            </DetailCard>
            <DetailCard icon={GraduationCap} title="Aprendizado obtido">
              {item.learning}
            </DetailCard>
            <DetailCard icon={ShieldCheck} title="Observação acadêmica">
              {item.note}
            </DetailCard>
          </div>

          <div className="case-modal__ethics">
            Este conteúdo possui finalidade acadêmica e demonstrativa,
            preservando ética, privacidade e responsabilidade profissional.
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function ClinicalCases() {
  const carouselRef = useRef(null)
  const [activeFilter, setActiveFilter] = useState('Todos')
  const [selectedCase, setSelectedCase] = useState(null)
  const [currentCase, setCurrentCase] = useState(0)

  const visibleCases = useMemo(() => {
    if (activeFilter === 'Todos') {
      return clinicalCases
    }

    return clinicalCases.filter((item) => item.filter === activeFilter)
  }, [activeFilter])

  const scrollCase = (direction) => {
    const carousel = carouselRef.current

    if (!carousel) {
      return
    }

    const card = carousel.querySelector('.case-card')
    const gap = Number.parseFloat(getComputedStyle(carousel).columnGap) || 0
    const cardWidth = card?.getBoundingClientRect().width || carousel.clientWidth
    const amount = cardWidth + gap
    const nextIndex = direction === 'next' ? currentCase + 1 : currentCase - 1
    const clampedIndex = Math.max(0, Math.min(visibleCases.length - 1, nextIndex))

    carousel.scrollTo({
      left: clampedIndex * amount,
      behavior: 'smooth',
    })
    setCurrentCase(clampedIndex)
  }

  useEffect(() => {
    const carousel = carouselRef.current

    if (!carousel) {
      return undefined
    }

    const updateCurrentCase = () => {
      const card = carousel.querySelector('.case-card')
      const gap = Number.parseFloat(getComputedStyle(carousel).columnGap) || 0
      const cardWidth =
        card?.getBoundingClientRect().width || carousel.clientWidth
      const amount = cardWidth + gap
      const nextIndex = amount ? Math.round(carousel.scrollLeft / amount) : 0

      setCurrentCase(Math.max(0, Math.min(visibleCases.length - 1, nextIndex)))
    }

    carousel.addEventListener('scroll', updateCurrentCase, { passive: true })
    window.addEventListener('resize', updateCurrentCase)
    updateCurrentCase()

    return () => {
      carousel.removeEventListener('scroll', updateCurrentCase)
      window.removeEventListener('resize', updateCurrentCase)
    }
  }, [visibleCases.length])

  const handleFilterChange = (filter) => {
    setActiveFilter(filter)
    setCurrentCase(0)
    carouselRef.current?.scrollTo({ left: 0 })
  }

  return (
    <section className="clinical section-shell" id="casos">
      <div className="clinical__header">
        <div className="section-heading">
          <span className="eyebrow">Portfólio clínico</span>
          <h2>Galeria de casos clínicos</h2>
          <p>
            Registros acadêmicos e estudos de casos acompanhados durante minha
            formação.
          </p>
        </div>
        <span className="academic-note">
          <ShieldCheck size={34} strokeWidth={1.45} aria-hidden="true" />
          Conteúdo com finalidade acadêmica e demonstrativa.
        </span>
      </div>

      <CaseFilter activeFilter={activeFilter} onChange={handleFilterChange} />

      <div className="clinical-carousel">
        {currentCase > 0 ? (
          <button
            className="procedure-carousel__control procedure-carousel__control--prev clinical-carousel__control"
            type="button"
            aria-label="Ver caso clínico anterior"
            onClick={() => scrollCase('prev')}
          >
            <ArrowLeft size={26} strokeWidth={2.4} aria-hidden="true" />
          </button>
        ) : null}

        <motion.div className="clinical__grid" ref={carouselRef} layout>
          <AnimatePresence mode="popLayout">
            {visibleCases.map((item, index) => (
              <CaseCard
                key={item.id}
                item={item}
                index={index}
                onOpen={setSelectedCase}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {currentCase < visibleCases.length - 1 ? (
          <button
            className="procedure-carousel__control procedure-carousel__control--next clinical-carousel__control"
            type="button"
            aria-label="Ver próximo caso clínico"
            onClick={() => scrollCase('next')}
          >
            <ArrowRight size={26} strokeWidth={2.4} aria-hidden="true" />
          </button>
        ) : null}
      </div>

      <div className="clinical__ethics-banner">
        <div className="clinical__ethics-icon">
          <ToothIcon size={34} strokeWidth={1.35} />
        </div>
        <p>
          Os casos apresentados possuem caráter acadêmico, preservando ética,
          privacidade e finalidade demonstrativa.
        </p>
        <HeartPulse size={68} strokeWidth={1} aria-hidden="true" />
      </div>

      <AnimatePresence>
        {selectedCase ? (
          <CaseModal item={selectedCase} onClose={() => setSelectedCase(null)} />
        ) : null}
      </AnimatePresence>
    </section>
  )
}
