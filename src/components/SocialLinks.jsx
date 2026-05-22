import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { Mail } from 'lucide-react'
import { socialLinks } from '../data/siteData'

const icons = {
  WhatsApp: FaWhatsapp,
  Instagram: FaInstagram,
  LinkedIn: FaLinkedinIn,
  GitHub: FaGithub,
  'E-mail': Mail,
}

export function SocialLinks({ className = '', labels }) {
  const visibleLinks = labels
    ? socialLinks.filter(({ label }) => labels.includes(label))
    : socialLinks

  return (
    <div className={`social-icons ${className}`}>
      {visibleLinks.map(({ label, href }) => {
        const Icon = icons[label]
        const external = href?.startsWith('http')

        return (
          <a
            key={label}
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer' : undefined}
            aria-label={label}
          >
            <Icon size={label === 'E-mail' ? 19 : 20} aria-hidden="true" />
          </a>
        )
      })}
    </div>
  )
}
