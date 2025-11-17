import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  const scrollToCTA = () => {
    const el = document.getElementById('cta-check')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#0b0d12] text-white">
      {/* Glow gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-25 blur-3xl" style={{
          background: 'radial-gradient( circle at center, #FA7466 0%, rgba(250,116,102,0) 60%)'
        }} />
        <div className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full opacity-20 blur-3xl" style={{
          background: 'radial-gradient( circle at center, #5b9dff 0%, rgba(91,157,255,0) 60%)'
        }} />
      </div>

      {/* Content + 3D */}
      <div className="relative mx-auto grid h-full max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-[#FA7466]" />
            <span>Futuristische KI-Lösungen</span>
          </div>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            <span className="text-white">KI – Revolution</span>
            <br />
            <span className="bg-gradient-to-r from-[#FA7466] via-[#ff9a8f] to-[#FA7466] bg-clip-text text-transparent">80 % weniger Routinearbeit</span>
            <br />
            <span className="text-white/90">für Unternehmer & Selbstständige</span>
          </h1>
          <p className="mt-6 max-w-xl text-white/70">
            Durch KI-Lösungen für Büro, Marketing, Vertrieb & Kundenservice.
          </p>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <button
              onClick={scrollToCTA}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl border-2 border-[#FA7466]/60 bg-[#FA7466] px-6 py-3 text-base font-semibold text-white shadow-[0_0_30px_rgba(250,116,102,0.4)] transition hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(250,116,102,0.55)] focus:outline-none"
            >
              <span className="relative z-10">Kostenlosen KI-Potenzialcheck starten</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              <span className="pointer-events-none absolute inset-0 -z-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-40" />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="relative h-[50vh] w-full md:h-[70vh]"
        >
          <div className="absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent shadow-2xl backdrop-blur">
            <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50">
        <div className="h-8 w-[1px] animate-pulse bg-gradient-to-b from-white/0 via-white/40 to-white/0" />
      </div>
    </section>
  )
}
