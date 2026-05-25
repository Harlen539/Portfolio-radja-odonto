import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  ClipboardList,
  FileText,
  GraduationCap,
  HeartPulse,
  Search,
  ShieldCheck,
  Sparkles,
  ScanLine,
  TrendingUp,
  UserRound,
  UsersRound,
  X,
} from 'lucide-react'
import { caseFilters, clinicalCases } from '../data/clinicalCases'

const filterIcons = {
  Documentação: FileText,
  Radiografia: ScanLine,
  Estética: Sparkles,
  Prevenção: ShieldCheck,
}

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
      aria-label={`Imagem demonstrativa: ${title}`}
    >
      <span />
      <span />
      <span />
      <span />
    </div>
  )
}

function CasePhoto({ photo, title, large = false }) {
  if (photo.src) {
    return (
      <img
        className={`case-photo ${large ? 'case-photo--large' : ''}`}
        src={photo.src}
        alt={`${title}: ${photo.label}`}
      />
    )
  }

  return <CaseVisual type={photo.visual} title={`${title}: ${photo.label}`} large={large} />
}

function CaseFilter({ activeFilter, onChange }) {
  return (
    <div className="case-filters" aria-label="Filtros de casos clínicos">
      {caseFilters.map((filter) => {
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
  const featuredPatient = item.patients[0]
  const featuredPhoto = featuredPatient.photos[0]

  return (
    <motion.article
      className="case-card"
      layout
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.38, delay: index * 0.04 }}
    >
      <CasePhoto photo={featuredPhoto} title={item.title} />
      <div className="case-card__content">
        <span className="case-card__category">{item.category}</span>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <div className="case-card__footer">
          <span className="case-card__tag">
            <UsersRound size={17} strokeWidth={1.7} aria-hidden="true" />
            {item.patients.length} pacientes
          </span>
          <button
            className="case-card__details"
            type="button"
            onClick={() => onOpen(item)}
            aria-label={`Ver galeria de ${item.title}`}
          >
            Ver galeria
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
      <span className="case-modal__info-icon">
        <Icon size={25} strokeWidth={1.65} aria-hidden="true" />
      </span>
      <div>
        <strong>{title}</strong>
        <p>{children}</p>
      </div>
    </div>
  )
}

function CaseModal({ item, onClose }) {
  const [patientId, setPatientId] = useState(item.patients[0].id)
  const activePatient =
    item.patients.find((patient) => patient.id === patientId) || item.patients[0]
  const [photoId, setPhotoId] = useState(activePatient.photos[0].id)
  const activePhoto =
    activePatient.photos.find((photo) => photo.id === photoId) || activePatient.photos[0]

  const selectPatient = (patient) => {
    setPatientId(patient.id)
    setPhotoId(patient.photos[0].id)
  }

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
        initial={{ opacity: 0, y: 34, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 240, damping: 24 }}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="case-modal__close"
          type="button"
          aria-label="Fechar galeria do caso"
          onClick={onClose}
        >
          <X size={27} strokeWidth={1.8} aria-hidden="true" />
        </button>

        <aside className="case-modal__media">
          <CasePhoto photo={activePhoto} title={item.title} large />
          <div className="case-modal__thumbs" aria-label="Fotos do paciente selecionado">
            {activePatient.photos.map((photo) => (
              <button
                className={`case-modal__thumb ${photoId === photo.id ? 'is-active' : ''}`}
                type="button"
                key={photo.id}
                aria-label={`Abrir foto ${photo.label}`}
                aria-pressed={photoId === photo.id}
                onClick={() => setPhotoId(photo.id)}
              >
                <CasePhoto photo={photo} title={item.title} />
              </button>
            ))}
          </div>

          <div className="case-modal__about">
            <span className="case-modal__about-icon">
              <GraduationCap size={30} strokeWidth={1.55} aria-hidden="true" />
            </span>
            <div>
              <strong>Sobre o caso</strong>
              <p>{item.about}</p>
            </div>
          </div>
        </aside>

        <div className="case-modal__body">
          <span className="case-card__category">{item.category}</span>
          <h3 id="case-modal-title">{item.title}</h3>
          <p className="case-modal__description">{item.description}</p>

          <div className="case-modal__patient-tabs" aria-label="Pacientes deste caso">
            {item.patients.map((patient) => (
              <button
                className={`case-modal__patient ${patientId === patient.id ? 'is-active' : ''}`}
                type="button"
                key={patient.id}
                aria-pressed={patientId === patient.id}
                onClick={() => selectPatient(patient)}
              >
                <UserRound size={22} strokeWidth={1.7} aria-hidden="true" />
                {patient.name}
              </button>
            ))}
          </div>

          <div className="case-modal__info-grid">
            <DetailCard icon={UserRound} title="Idade">
              {activePatient.age}
            </DetailCard>
            <DetailCard icon={ToothIcon} title="Queixa principal">
              {activePatient.complaint}
            </DetailCard>
            <DetailCard icon={Search} title="Causa / Observação inicial">
              {activePatient.observation}
            </DetailCard>
            <DetailCard icon={Camera} title="Conduta realizada">
              {activePatient.conduct}
            </DetailCard>
            <DetailCard icon={ClipboardList} title="O que foi feito">
              {activePatient.completed}
            </DetailCard>
            <DetailCard icon={TrendingUp} title="Resultado / Aprendizado">
              {activePatient.result}
            </DetailCard>
          </div>
        </div>

        <footer className="case-modal__footer">
          <ShieldCheck size={34} strokeWidth={1.45} aria-hidden="true" />
          <p>
            Dados apresentados com finalidade acadêmica, preservando privacidade e
            responsabilidade profissional.
          </p>
          <button className="case-modal__back" type="button" onClick={onClose}>
            <ArrowLeft size={19} aria-hidden="true" />
            Voltar para galeria
          </button>
        </footer>
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
          <CaseModal
            key={selectedCase.id}
            item={selectedCase}
            onClose={() => setSelectedCase(null)}
          />
        ) : null}
      </AnimatePresence>
    </section>
  )
}
