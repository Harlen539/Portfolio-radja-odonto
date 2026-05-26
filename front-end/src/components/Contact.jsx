import { useState } from 'react'
import { CheckCircle2, LoaderCircle, Mail, MapPin, Send, TriangleAlert } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { profile } from '../data/siteData'
import { SocialLinks } from './SocialLinks'

export function Contact() {
  const [submitStatus, setSubmitStatus] = useState('idle')

  async function handleSubmit(event) {
    event.preventDefault()

    const form = event.currentTarget
    const submittedData = Object.fromEntries(new FormData(form).entries())
    const formData = {
      ...submittedData,
      _replyto: submittedData.email,
      _subject: `Contato do site - ${submittedData.name}`,
      'Nome do remetente': submittedData.name,
      'E-mail para resposta': submittedData.email,
      Mensagem: submittedData.message,
    }

    setSubmitStatus('sending')

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(profile.email)}`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        },
      )
      const result = await response.json()

      if (!response.ok || result.success === false || result.success === 'false') {
        throw new Error('Falha no envio da mensagem.')
      }

      form.reset()
      setSubmitStatus('success')
    } catch {
      setSubmitStatus('error')
    }
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
                Vamos conversar sobre conexões acadêmicas, parcerias,
                oportunidades e projetos na área odontológica.
              </p>
            </div>

            <div className="contact__details">
              <a href={profile.whatsappUrl} target="_blank" rel="noreferrer">
                <FaWhatsapp size={20} />
                <span>{profile.whatsappLabel}</span>
              </a>
              <a href={profile.emailUrl} target="_blank" rel="noreferrer">
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
            <input
              className="contact-form__honey"
              type="text"
              name="_honey"
              tabIndex="-1"
              autoComplete="off"
              aria-hidden="true"
            />
            <input type="hidden" name="_template" value="table" />
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
            <button
              className="contact-form__button"
              type="submit"
              disabled={submitStatus === 'sending'}
            >
              {submitStatus === 'sending' ? 'Enviando...' : 'Enviar mensagem'}
              {submitStatus === 'sending' ? (
                <LoaderCircle className="contact-form__spinner" size={18} />
              ) : (
                <Send size={17} />
              )}
            </button>
            {submitStatus === 'success' ? (
              <p className="contact-form__feedback is-success" role="status">
                <CheckCircle2 size={17} />
                Mensagem enviada com sucesso.
              </p>
            ) : null}
            {submitStatus === 'error' ? (
              <p className="contact-form__feedback is-error" role="alert">
                <TriangleAlert size={17} />
                Não foi possível enviar agora. Tente novamente ou use o e-mail acima.
              </p>
            ) : null}
            {submitStatus === 'idle' ? <p>Responderei assim que possível.</p> : null}
          </form>
        </div>
      </div>
    </section>
  )
}
