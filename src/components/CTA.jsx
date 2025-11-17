import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  const handleClick = () => {
    const el = document.getElementById('cta-check')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative bg-[#0b0d12] py-24 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Bereit für 80% weniger Routinearbeit?
        </motion.h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">
          Sichern Sie sich jetzt den kostenlosen KI-Potenzialcheck.
        </p>
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleClick}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl border-2 border-[#FA7466]/60 bg-[#FA7466] px-6 py-3 text-base font-semibold text-white shadow-[0_0_30px_rgba(250,116,102,0.4)] transition hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(250,116,102,0.55)] focus:outline-none"
          >
            <span className="relative z-10">Jetzt KI-Potenzialcheck sichern</span>
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            <span className="pointer-events-none absolute inset-0 -z-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-40" />
          </button>
        </div>
      </div>
    </section>
  )
}
