import radjaLogo from '../assets/radja-logo.png'

export function Logo({ compact = false, className = '', alt = 'Logo Radja Rodrigues Odontologia' }) {
  return (
    <a className={`logo ${compact ? 'logo--compact' : ''} ${className}`} href="#inicio">
      <img src={radjaLogo} alt={alt} />
    </a>
  )
}
