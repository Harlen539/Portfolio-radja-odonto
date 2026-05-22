import './App.css'
import { About } from './components/About'
import { ClinicalCases } from './components/ClinicalCases'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Procedures } from './components/Procedures'

function App() {
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
