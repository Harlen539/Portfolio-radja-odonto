import { useState } from 'react'
import { CheckCircle2, LoaderCircle, Mail, MapPin, Send, TriangleAlert } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { getSiteData } from '../data/siteData'
import { SocialLinks } from './SocialLinks'
import { useLanguage } from '../context/languageContext'

export function Contact() {
  const { language, copy } = useLanguage()
  const { profile } = getSiteData(language)
  const [submitStatus, setSubmitStatus] = useState('idle')

  async function handleSubmit(event) {
    event.preventDefault()

    const form = event.currentTarget
    const submittedData = Object.fromEntries(new FormData(form).entries())
    const formData = {
      ...submittedData,
      _replyto: submittedData.email,
      _subject: `${copy.contact.subject} - ${submittedData.name}`,
      Name: submittedData.name,
      Email: submittedData.email,
      Message: submittedData.message,
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
              <span className="eyebrow">{copy.contact.eyebrow}</span>
              <h2>{copy.contact.title}</h2>
              <p>{copy.contact.intro}</p>
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
              <span>{copy.contact.name}</span>
              <input name="name" type="text" placeholder={copy.contact.name} required />
            </label>
            <label>
              <span>{copy.contact.email}</span>
              <input
                name="email"
                type="email"
                placeholder={copy.contact.email}
                required
              />
            </label>
            <label>
              <span>{copy.contact.message}</span>
              <textarea
                name="message"
                placeholder={copy.contact.message}
                rows="6"
                required
              />
            </label>
            <button
              className="contact-form__button"
              type="submit"
              disabled={submitStatus === 'sending'}
            >
              {submitStatus === 'sending' ? copy.contact.sending : copy.contact.send}
              {submitStatus === 'sending' ? (
                <LoaderCircle className="contact-form__spinner" size={18} />
              ) : (
                <Send size={17} />
              )}
            </button>
            {submitStatus === 'success' ? (
              <p className="contact-form__feedback is-success" role="status">
                <CheckCircle2 size={17} />
                {copy.contact.success}
              </p>
            ) : null}
            {submitStatus === 'error' ? (
              <p className="contact-form__feedback is-error" role="alert">
                <TriangleAlert size={17} />
                {copy.contact.error}
              </p>
            ) : null}
            {submitStatus === 'idle' ? <p>{copy.contact.reply}</p> : null}
          </form>
        </div>
      </div>
    </section>
  )
}
