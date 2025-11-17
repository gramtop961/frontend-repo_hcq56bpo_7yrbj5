import { motion } from 'framer-motion'
import { Briefcase, Megaphone, LineChart, Headphones } from 'lucide-react'

const items = [
  { icon: Briefcase, title: 'Büro', desc: 'Dokumente, Termine, E-Mails – KI organisiert und automatisiert.' },
  { icon: Megaphone, title: 'Marketing', desc: 'Content, Ads & Funnel – datengetrieben und skalierbar.' },
  { icon: LineChart, title: 'Vertrieb', desc: 'Lead-Qualifizierung, Angebote, Follow-ups – 24/7.' },
  { icon: Headphones, title: 'Kundenservice', desc: 'Ticketing, FAQs, Chatbots – schnell, präzise, persönlich.' },
]

export default function Features() {
  return (
    <section className="relative bg-[#0b0d12] py-20 text-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Was KI übernimmt
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition hover:border-[#FA7466]/50 hover:shadow-[0_0_40px_rgba(250,116,102,0.25)]"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#FA7466]/15 text-[#FA7466] ring-1 ring-inset ring-[#FA7466]/30">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-white/70">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
