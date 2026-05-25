import { Logo } from './Logo'
import { SocialLinks } from './SocialLinks'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__copy">
          © 2026 Radja Rodrigues Odontologia. Todos os direitos reservados.
        </p>

        <Logo compact className="site-footer__logo" />

        <SocialLinks
          className="site-footer__social"
          labels={['Instagram', 'LinkedIn', 'E-mail']}
        />
      </div>
    </footer>
  )
}
