import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from './Logo'
import { menuItems } from '../data/siteData'

export function Header() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Logo />

        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={`site-nav ${open ? 'is-open' : ''}`}>
          {menuItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
