import { useEffect } from 'react'
import './App.css'
import { About } from './components/About'
import { ClinicalCases } from './components/ClinicalCases'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Procedures } from './components/Procedures'
import { useLanguage } from './context/languageContext'

function App() {
  const { copy } = useLanguage()

  useEffect(() => {
    document.title = copy.documentTitle
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', copy.description)
  }, [copy])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Procedures />
        <ClinicalCases />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
