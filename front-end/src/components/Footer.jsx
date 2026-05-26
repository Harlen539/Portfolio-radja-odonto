import { Logo } from './Logo'
import { SocialLinks } from './SocialLinks'
import { useLanguage } from '../context/languageContext'

export function Footer() {
  const { copy } = useLanguage()

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__copy">
          {copy.footer}
        </p>

        <Logo compact className="site-footer__logo" alt={copy.logoAlt} />

        <SocialLinks
          className="site-footer__social"
          labels={['Instagram', 'LinkedIn', 'E-mail']}
        />
      </div>
    </footer>
  )
}
