import { Heart, ShieldCheck, Sparkles, Target } from 'lucide-react'
import dentisticaIcon from '../assets/procedures/dentistica.png'
import endodontiaIcon from '../assets/procedures/endodontia.png'
import ortodontiaIcon from '../assets/procedures/ortodontia.png'
import periodontiaIcon from '../assets/procedures/periodontia.png'
import prevencaoIcon from '../assets/procedures/prevencao.png'
import proteseIcon from '../assets/procedures/protese.png'

const contactProfile = {
  name: 'Radja Rodrigues',
  whatsappLabel: '+55 (83) 98694-9357',
  whatsappUrl: 'https://wa.me/5583986949357',
  email: 'radjarodrigues16@gmail.com',
  emailUrl:
    'https://mail.google.com/mail/?view=cm&fs=1&to=radjarodrigues16%40gmail.com',
  instagramUrl:
    'https://www.instagram.com/radja.odonto?igsh=MWNhZTBiZml0ZjQxZQ==',
  linkedinUrl: 'https://www.linkedin.com/in/radja-rodrigues-523884238/',
  location: 'João Pessoa, PB',
}

const localizedSiteData = {
  pt: {
    profile: {
      highlight: 'Cuidar de sorrisos é transformar histórias.',
    },
    menuItems: [
      { label: 'Início', href: '#inicio' },
      { label: 'Sobre mim', href: '#sobre' },
      { label: 'Procedimentos', href: '#procedimentos' },
      { label: 'Casos clínicos', href: '#casos' },
      { label: 'Contato', href: '#contato' },
    ],
    values: ['Cuidado', 'Ética', 'Dedicação', 'Evolução'],
    procedures: [
      ['Dentística', 'Estudo da estética, função e restauração dental com atenção ao equilíbrio do sorriso.'],
      ['Periodontia', 'Vivência acadêmica voltada aos tecidos de suporte, saúde gengival e prevenção.'],
      ['Endodontia', 'Interesse clínico em diagnóstico, planejamento e cuidado da estrutura interna dental.'],
      ['Prótese', 'Áreas de estudo ligadas à reabilitação, função mastigatória e harmonia oral.'],
      ['Ortodontia', 'Jornada acadêmica no entendimento da oclusão, alinhamento e desenvolvimento facial.'],
      ['Prevenção', 'Base essencial do cuidado odontológico, com foco em orientação e promoção de saúde.'],
    ],
  },
  en: {
    profile: {
      highlight: 'Caring for smiles means transforming stories.',
    },
    menuItems: [
      { label: 'Home', href: '#inicio' },
      { label: 'About me', href: '#sobre' },
      { label: 'Procedures', href: '#procedimentos' },
      { label: 'Clinical cases', href: '#casos' },
      { label: 'Contact', href: '#contato' },
    ],
    values: ['Care', 'Ethics', 'Dedication', 'Growth'],
    procedures: [
      ['Restorative dentistry', 'Study of dental aesthetics, function, and restoration with attention to smile balance.'],
      ['Periodontics', 'Academic experience focused on supporting tissues, gum health, and prevention.'],
      ['Endodontics', 'Clinical interest in diagnosis, planning, and care of internal dental structures.'],
      ['Prosthodontics', 'Fields of study related to rehabilitation, chewing function, and oral harmony.'],
      ['Orthodontics', 'Academic journey in understanding occlusion, alignment, and facial development.'],
      ['Prevention', 'An essential foundation of dental care, focused on guidance and health promotion.'],
    ],
  },
}

const valueIcons = [Heart, ShieldCheck, Target, Sparkles]
const procedureIcons = [
  dentisticaIcon,
  periodontiaIcon,
  endodontiaIcon,
  proteseIcon,
  ortodontiaIcon,
  prevencaoIcon,
]

export function getSiteData(language = 'pt') {
  const content = localizedSiteData[language] || localizedSiteData.pt
  const profile = { ...contactProfile, ...content.profile }

  return {
    profile,
    menuItems: content.menuItems,
    values: content.values.map((title, index) => ({
      title,
      icon: valueIcons[index],
    })),
    procedures: content.procedures.map(([title, description], index) => ({
      title,
      description,
      icon: procedureIcons[index],
    })),
    socialLinks: [
      { label: 'WhatsApp', href: profile.whatsappUrl },
      { label: 'Instagram', href: profile.instagramUrl },
      { label: 'LinkedIn', href: profile.linkedinUrl },
      { label: 'E-mail', href: profile.emailUrl },
    ],
  }
}
