import { Heart, ShieldCheck, Sparkles, Target } from 'lucide-react'
import dentisticaIcon from '../assets/procedures/dentistica.png'
import endodontiaIcon from '../assets/procedures/endodontia.png'
import ortodontiaIcon from '../assets/procedures/ortodontia.png'
import periodontiaIcon from '../assets/procedures/periodontia.png'
import prevencaoIcon from '../assets/procedures/prevencao.png'
import proteseIcon from '../assets/procedures/protese.png'

export const profile = {
  name: 'Radja Rodrigues',
  area: 'Odontologia',
  subtitle: 'Estudante de Odontologia · 7º Período · UNIPÊ - João Pessoa, PB',
  intro:
    'Apaixonada por sorrisos e pela transformação que a odontologia proporciona na vida das pessoas. Aqui compartilho minha jornada acadêmica, conhecimentos, procedimentos estudados e casos clínicos que refletem dedicação, evolução e amor pela profissão.',
  highlight: 'Cuidar de sorrisos é transformar histórias.',
  whatsappLabel: '+55 (83) 98694-9357',
  whatsappUrl: 'https://wa.me/5583986949357',
  email: 'radjarodrigues16@gmail.com',
  emailUrl: 'mailto:radjarodrigues16@gmail.com',
  instagramUrl:
    'https://www.instagram.com/radja.odonto?igsh=MWNhZTBiZml0ZjQxZQ==',
  linkedinUrl: 'https://www.linkedin.com/in/radja-rodrigues-523884238/',
  RadjaEmail: 'radjarodrigues16@gmail.com',
  RadjaEmailUrl: 'mailto:Radjarodrigues16@gmail.com',
  location: 'João Pessoa, PB',
}

export const menuItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre mim', href: '#sobre' },
  { label: 'Procedimentos', href: '#procedimentos' },
  { label: 'Casos clínicos', href: '#casos' },
  { label: 'Contato', href: '#contato' },
]

export const values = [
  { title: 'Cuidado', icon: Heart },
  { title: 'Ética', icon: ShieldCheck },
  { title: 'Dedicação', icon: Target },
  { title: 'Evolução', icon: Sparkles },
]

export const procedures = [
  {
    title: 'Dentística',
    description:
      'Estudo da estética, função e restauração dental com atenção ao equilíbrio do sorriso.',
    icon: dentisticaIcon,
  },
  {
    title: 'Periodontia',
    description:
      'Vivência acadêmica voltada aos tecidos de suporte, saúde gengival e prevenção.',
    icon: periodontiaIcon,
  },
  {
    title: 'Endodontia',
    description:
      'Interesse clínico em diagnóstico, planejamento e cuidado da estrutura interna dental.',
    icon: endodontiaIcon,
  },
  {
    title: 'Prótese',
    description:
      'Áreas de estudo ligadas à reabilitação, função mastigatória e harmonia oral.',
    icon: proteseIcon,
  },
  {
    title: 'Ortodontia',
    description:
      'Jornada acadêmica no entendimento da oclusão, alinhamento e desenvolvimento facial.',
    icon: ortodontiaIcon,
  },
  {
    title: 'Prevenção',
    description:
      'Base essencial do cuidado odontológico, com foco em orientação e promoção de saúde.',
    icon: prevencaoIcon,
  },
]

export const socialLinks = [
  { label: 'WhatsApp', href: profile.whatsappUrl },
  { label: 'Instagram', href: profile.instagramUrl },
  { label: 'LinkedIn', href: profile.linkedinUrl },
  { label: 'E-mail', href: profile.RadjaEmailUrl },
]
