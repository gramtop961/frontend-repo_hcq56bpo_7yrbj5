import { motion } from 'framer-motion'
import { Gauge, Bot, Rocket } from 'lucide-react'

export default function Benefits() {
  const benefits = [
    { icon: Gauge, title: '80% weniger Routine', desc: 'Prozesse automatisieren, Zeit zurückgewinnen, Fokus auf Wachstum.' },
    { icon: Bot, title: '24/7 KI verfügbar', desc: 'Immer aktiv, skalierbar, fehlertolerant – für Support und Sales.' },
    { icon: Rocket, title: 'Sofort einsatzbereit', desc: 'Standardisierte Setups, schnelle Implementierung, messbare Ergebnisse.' },
  ]

  return (
    <section className="relative bg-[#0b0d12] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Vorteile
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-6 shadow-xl backdrop-blur"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#FA7466]/15 text-[#FA7466] ring-1 ring-inset ring-[#FA7466]/30">
                <b.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-white/70">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
