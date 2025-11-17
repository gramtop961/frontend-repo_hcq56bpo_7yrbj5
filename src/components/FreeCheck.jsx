import { useState } from 'react'
import { motion } from 'framer-motion'

export default function FreeCheck() {
  const [status, setStatus] = useState('idle')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    // Simulated submit; backend could be added later
    setTimeout(() => setStatus('done'), 800)
  }

  return (
    <section id="cta-check" className="relative bg-[#0b0d12] py-20 text-white">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-8 shadow-2xl backdrop-blur"
        >
          <h3 className="text-2xl font-semibold">Kostenlosen KI-Potenzialcheck starten</h3>
          <p className="mt-2 text-white/70">Kurze Angaben – wir melden uns mit konkreten Automatisierungsansätzen.</p>

          <form onSubmit={submit} className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <input required placeholder="Name" className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none ring-0 placeholder:text-white/40" />
            <input required type="email" placeholder="E-Mail" className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none ring-0 placeholder:text-white/40" />
            <input placeholder="Unternehmen / Branche" className="md:col-span-2 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none ring-0 placeholder:text-white/40" />
            <textarea placeholder="Wo steckt aktuell die meiste Routinearbeit?" rows={4} className="md:col-span-2 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none ring-0 placeholder:text-white/40" />

            <div className="md:col-span-2">
              <button disabled={status==='loading' || status==='done'} className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl border-2 border-[#FA7466]/60 bg-[#FA7466] px-6 py-3 text-base font-semibold text-white shadow-[0_0_30px_rgba(250,116,102,0.4)] transition hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(250,116,102,0.55)] focus:outline-none disabled:opacity-60">
                {status==='idle' && 'Absenden'}
                {status==='loading' && 'Sende...'}
                {status==='done' && 'Danke! Wir melden uns.'}
                <span className="pointer-events-none absolute inset-0 -z-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-40" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
