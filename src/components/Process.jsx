import { motion } from 'framer-motion'

const steps = [
  { title: 'Analyse', desc: 'Wir identifizieren Hebel, Potenziale und Quick-Wins.' },
  { title: 'KI-Setup', desc: 'Auswahl der Tools, Prompt-Design und Prozessintegration.' },
  { title: 'Automatisierung', desc: 'End-to-End-Abläufe, Monitoring und kontinuierliche Optimierung.' },
]

export default function Process() {
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
          Ablauf
        </motion.h2>
        <ol className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
            >
              <div className="mb-3 text-sm font-semibold text-[#FA7466]">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
