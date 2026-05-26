import { useEffect, useMemo, useState } from 'react'
import { interfaceText } from '../data/translations'
import { LanguageContext } from './languageContext'

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const storedLanguage = window.localStorage.getItem('radja-language')

    return storedLanguage === 'en' ? 'en' : 'pt'
  })

  useEffect(() => {
    window.localStorage.setItem('radja-language', language)
    document.documentElement.lang = language === 'en' ? 'en' : 'pt-BR'
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      copy: interfaceText[language],
    }),
    [language],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
