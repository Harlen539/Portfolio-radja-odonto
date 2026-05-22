import { Mail, MapPin, Send } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { profile } from '../data/siteData'
import { SocialLinks } from './SocialLinks'

export function Contact() {
  function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')
    const subject = `Contato pelo portfolio - ${name}`
    const body = [
      `Nome: ${name}`,
      `E-mail: ${email}`,
      '',
      'Mensagem:',
      message,
    ].join('\n')

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section className="contact section-shell" id="contato">
      <div className="contact__panel">
        <div className="contact__layout">
          <div>
            <div className="section-heading">
              <span className="eyebrow">Contato</span>
              <h2>Entre em contato</h2>
              <p>
                Vamos conversar sobre conexoes academicas, parcerias,
                oportunidades e projetos na area odontologica.
              </p>
            </div>

            <div className="contact__details">
              <a href={profile.whatsappUrl} target="_blank" rel="noreferrer">
                <FaWhatsapp size={20} />
                <span>{profile.whatsappLabel}</span>
              </a>
              <a href={profile.emailUrl}>
                <Mail size={20} />
                <span>{profile.email}</span>
              </a>
              <span>
                <MapPin size={20} />
                <span>{profile.location}</span>
              </span>
            </div>

            <SocialLinks className="contact__actions" />
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              <span>Seu nome</span>
              <input name="name" type="text" placeholder="Seu nome" required />
            </label>
            <label>
              <span>Seu e-mail</span>
              <input
                name="email"
                type="email"
                placeholder="Seu e-mail"
                required
              />
            </label>
            <label>
              <span>Sua mensagem</span>
              <textarea
                name="message"
                placeholder="Sua mensagem"
                rows="6"
                required
              />
            </label>
            <button className="contact-form__button" type="submit">
              Enviar mensagem
              <Send size={17} />
            </button>
            <p>Responderei assim que possivel.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
