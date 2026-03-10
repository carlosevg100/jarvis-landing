'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const STEPS = [
  { emoji: '📲', title: 'Você encaminha', desc: 'Qualquer coisa. Áudio, print, texto, PDF.\nO mesmo gesto que você já faz todo dia.' },
  { emoji: '🧠', title: 'Jarvis entende', desc: 'Extrai o que importa — data, tarefa, compromisso, prazo.\nOrganiza sem você precisar fazer nada.' },
  { emoji: '⏰', title: 'Você é lembrado', desc: 'Na hora certa. No WhatsApp.\nSem precisar checar nada. Sem abrir nenhum app.' },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="como-funciona" className="py-24 px-6">
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-black text-white text-center mb-16 tracking-tight"
        >
          Três passos. Uma mudança permanente.
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-0 relative">
          <div className="hidden md:block absolute top-10 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px bg-[#1E1E1E]" />
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="flex-1 flex flex-col items-center text-center px-4 mb-10 md:mb-0 relative"
            >
              <div className="w-20 h-20 rounded-2xl bg-[#111] border border-[#1E1E1E] flex items-center justify-center text-4xl mb-5 relative z-10">
                {step.emoji}
              </div>
              <div className="text-[#25D366] text-xs font-bold mb-2 uppercase tracking-widest">
                Passo {i + 1}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-[#666] text-sm leading-relaxed whitespace-pre-line">{step.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center text-[#444] text-sm mt-12"
        >
          É isso. Três passos. Uma mudança permanente.
        </motion.p>
      </div>
    </section>
  )
}
