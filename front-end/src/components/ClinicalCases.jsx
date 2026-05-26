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
  X,
} from 'lucide-react'
import { caseCards, caseFilters, pacientes } from '../data/pacientes'

const filterIcons = {
  Documentação: FileText,
  Radiografia: ScanLine,
  Estética: Sparkles,
  Prevenção: ShieldCheck,
}

const clinicalFieldLabels = {
  tipoDeRegistro: 'Tipo de registro',
  finalidade: 'Finalidade',
  areaDeEstudo: 'Área de estudo',
  nivelDoCaso: 'Nível do caso',
  status: 'Status',
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

function CasePhoto({ photo, title, large = false, thumbnail = false }) {
  return (
    <figure
      className={`case-photo-frame ${large ? 'case-photo-frame--large' : ''} ${thumbnail ? 'case-photo-frame--thumb' : ''}`}
    >
      <img
        className={`case-photo ${large ? 'case-photo--large' : ''}`}
        src={photo.src}
        alt={photo.alt || `${title}: ${photo.label}`}
        loading={large ? 'eager' : 'lazy'}
      />
      {thumbnail ? null : (
        <figcaption>{large ? photo.label : 'Imagem ilustrativa'}</figcaption>
      )}
    </figure>
  )
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

function CaseCard({ caseCard, index, onOpen }) {
  return (
    <motion.article
      className="case-card"
      layout
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.38, delay: index * 0.04 }}
    >
      <CasePhoto
        photo={{ src: caseCard.capa, label: caseCard.categoria }}
        title={caseCard.titulo}
      />
      <div className="case-card__content">
        <span className="case-card__category">{caseCard.subtitulo}</span>
        <h3>{caseCard.categoria}</h3>
        <p>{caseCard.descricaoCurta}</p>
        <div className="case-card__footer">
          <span className="case-card__tag">
            <UserRound size={17} strokeWidth={1.7} aria-hidden="true" />
            {pacientes.length} pacientes
          </span>
          <button
            className="case-card__details"
            type="button"
            onClick={() => onOpen(caseCard.key)}
            aria-label={`Ver galeria de ${caseCard.categoria}`}
          >
            Ver galeria
            <ArrowRight size={18} strokeWidth={1.9} aria-hidden="true" />
          </button>
        </div>
      </div>
    </motion.article>
  )
}

function CasePatientTabs({ activePatientId, onChange }) {
  return (
    <div className="case-modal__patient-tabs" aria-label="Selecionar paciente">
      {pacientes.map((patient) => (
        <button
          className={`case-modal__patient ${activePatientId === patient.id ? 'is-active' : ''}`}
          type="button"
          key={patient.id}
          aria-pressed={activePatientId === patient.id}
          onClick={() => onChange(patient.id)}
        >
          <UserRound size={16} strokeWidth={1.8} aria-hidden="true" />
          {patient.nome}
        </button>
      ))}
    </div>
  )
}

function CaseInfoItem({ icon: Icon, title, children }) {
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

function CaseGalleryModal({ activeCaseKey, onClose }) {
  const [activePatientId, setActivePatientId] = useState(pacientes[0].id)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const activePatient =
    pacientes.find((patient) => patient.id === activePatientId) || pacientes[0]
  const activeCase = activePatient?.casos?.[activeCaseKey]
  const activeImage =
    activeCase?.imagens?.[activeImageIndex] || activeCase?.imagens?.[0]

  const handlePatientChange = (patientId) => {
    setActivePatientId(patientId)
    setActiveImageIndex(0)
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

        {activeCase && activeImage ? (
          <>
            <aside className="case-modal__media">
              <CasePhoto photo={activeImage} title={activeCase.titulo} large />
              <div className="case-modal__thumbs" aria-label="Imagens deste registro">
                {activeCase.imagens.map((photo, index) => (
                  <button
                    className={`case-modal__thumb ${activeImageIndex === index ? 'is-active' : ''}`}
                    type="button"
                    key={photo.src}
                    aria-label={`Abrir foto ${photo.label}`}
                    aria-pressed={activeImageIndex === index}
                    onClick={() => setActiveImageIndex(index)}
                  >
                    <CasePhoto photo={photo} title={activeCase.titulo} thumbnail />
                  </button>
                ))}
              </div>

              <div className="case-modal__about">
                <span className="case-modal__about-icon">
                  <GraduationCap size={30} strokeWidth={1.55} aria-hidden="true" />
                </span>
                <div>
                  <strong>Sobre o caso demonstrativo</strong>
                  <p>{activeCase.observacaoAcademica}</p>
                </div>
              </div>
            </aside>

            <div className="case-modal__body">
              <span className="case-card__category">{activeCase.categoria}</span>
              <h3 id="case-modal-title">{activeCase.titulo}</h3>
              <p className="case-modal__description">{activeCase.descricaoCurta}</p>

              <CasePatientTabs
                activePatientId={activePatientId}
                onChange={handlePatientChange}
              />

              <div className="case-modal__tags" aria-label="Marcadores do caso">
                {activeCase.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="case-modal__info-grid">
                <CaseInfoItem icon={UserRound} title="Paciente / Idade">
                  {activePatient.nome} · {activePatient.idade}
                </CaseInfoItem>
                <CaseInfoItem icon={ToothIcon} title="Queixa principal">
                  {activeCase.queixaPrincipal}
                </CaseInfoItem>
                <CaseInfoItem icon={Search} title="Causa / Observação inicial">
                  {activeCase.causaObservacaoInicial}
                </CaseInfoItem>
                <CaseInfoItem icon={Camera} title="Conduta realizada">
                  {activeCase.condutaRealizada}
                </CaseInfoItem>
                <CaseInfoItem icon={ClipboardList} title="O que foi feito">
                  {activeCase.oQueFoiFeito}
                </CaseInfoItem>
                <CaseInfoItem icon={TrendingUp} title="Resultado / Aprendizado">
                  {activeCase.resultadoAprendizado}
                </CaseInfoItem>
              </div>

              <dl className="case-modal__clinical-data" aria-label="Dados clínicos do registro">
                {Object.entries(activeCase.dadosClinicos).map(([key, value]) => (
                  <div key={key}>
                    <dt>{clinicalFieldLabels[key]}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <footer className="case-modal__footer">
              <ShieldCheck size={34} strokeWidth={1.45} aria-hidden="true" />
              <p>
                {activeCase.observacaoAcademica} Imagens ilustrativas e dados
                fictícios, apresentados com finalidade acadêmica.
              </p>
              <button className="case-modal__back" type="button" onClick={onClose}>
                <ArrowLeft size={19} aria-hidden="true" />
                Voltar para galeria
              </button>
            </footer>
          </>
        ) : (
          <div className="case-modal__empty">
            <h3 id="case-modal-title">{activePatient.nome}</h3>
            <p>Este paciente ainda não possui registros para este componente.</p>
            <CasePatientTabs
              activePatientId={activePatientId}
              onChange={handlePatientChange}
            />
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

export function ClinicalCases() {
  const carouselRef = useRef(null)
  const [activeFilter, setActiveFilter] = useState('Todos')
  const [activeCaseKey, setActiveCaseKey] = useState(null)
  const [currentCase, setCurrentCase] = useState(0)

  const visibleCards = useMemo(() => {
    if (activeFilter === 'Todos') {
      return caseCards
    }

    return caseCards.filter((card) => card.filtro === activeFilter)
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
    const clampedIndex = Math.max(0, Math.min(visibleCards.length - 1, nextIndex))

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

      setCurrentCase(Math.max(0, Math.min(visibleCards.length - 1, nextIndex)))
    }

    carousel.addEventListener('scroll', updateCurrentCase, { passive: true })
    window.addEventListener('resize', updateCurrentCase)
    updateCurrentCase()

    return () => {
      carousel.removeEventListener('scroll', updateCurrentCase)
      window.removeEventListener('resize', updateCurrentCase)
    }
  }, [visibleCards.length])

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
            {visibleCards.map((caseCard, index) => (
              <CaseCard
                key={caseCard.key}
                caseCard={caseCard}
                index={index}
                onOpen={setActiveCaseKey}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {currentCase < visibleCards.length - 1 ? (
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
        {activeCaseKey ? (
          <CaseGalleryModal
            key={activeCaseKey}
            activeCaseKey={activeCaseKey}
            onClose={() => setActiveCaseKey(null)}
          />
        ) : null}
      </AnimatePresence>
    </section>
  )
}
