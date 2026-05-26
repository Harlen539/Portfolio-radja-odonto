import { useState } from 'react'
import { Languages, Menu, X } from 'lucide-react'
import { Logo } from './Logo'
import { getSiteData } from '../data/siteData'
import { useLanguage } from '../context/languageContext'

function LanguageSwitcher({ className = '' }) {
  const [expanded, setExpanded] = useState(false)
  const { language, setLanguage, copy } = useLanguage()

  const selectLanguage = (option) => {
    setLanguage(option)
    setExpanded(false)
  }

  return (
    <div className={`language-switcher ${expanded ? 'is-open' : ''} ${className}`}>
      <button
        className="language-switcher__toggle"
        type="button"
        aria-label={copy.language.label}
        aria-expanded={expanded}
        onClick={() => setExpanded((current) => !current)}
      >
        <Languages size={18} strokeWidth={1.8} aria-hidden="true" />
      </button>

      {expanded ? (
        <div className="language-switcher__options">
          {['pt', 'en'].map((option) => (
            <button
              className={language === option ? 'is-active' : ''}
              type="button"
              key={option}
              aria-label={
                option === 'pt' ? copy.language.portuguese : copy.language.english
              }
              aria-pressed={language === option}
              onClick={() => selectLanguage(option)}
            >
              {option.toUpperCase()}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const { language, copy } = useLanguage()
  const { menuItems } = getSiteData(language)

  const closeMenu = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Logo alt={copy.logoAlt} />

        <nav className={`site-nav ${open ? 'is-open' : ''}`}>
          {menuItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <LanguageSwitcher className="language-switcher--mobile" />
        </nav>

        <div className="site-header__actions">
          <LanguageSwitcher className="language-switcher--desktop" />

          <button
            className="menu-toggle"
            type="button"
            aria-label={open ? copy.header.close : copy.header.open}
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  )
}
