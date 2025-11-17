import Hero from './components/Hero'
import Features from './components/Features'
import Benefits from './components/Benefits'
import Process from './components/Process'
import CTA from './components/CTA'
import FreeCheck from './components/FreeCheck'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0d12]">
      <Hero />
      <Features />
      <Benefits />
      <Process />
      <CTA />
      <FreeCheck />
      <footer className="border-t border-white/10 bg-[#0b0d12] py-8 text-center text-xs text-white/50">
        © {new Date().getFullYear()} KI-Lösungen – Alle Rechte vorbehalten
      </footer>
    </div>
  )
}

export default App
