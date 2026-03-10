'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const CARDS = [
  { emoji: '🏫', text: 'Grupo da escola da Olivia.\n47 mensagens sobre a festa junina.\nData? Perdida em algum lugar lá no meio.' },
  { emoji: '🎙️', text: 'Áudio de 4 minutos do seu chefe.\n"Vou ouvir depois."\nDepois nunca chegou. As tarefas, também não.' },
  { emoji: '🏢', text: 'Print do condomínio sobre a assembleia.\nVocê foi?\nVocê lembrou?' },
  { emoji: '💸', text: 'Pagamento mencionado num grupo.\nNinguém confirmou.\nAtrasou. Claro.' },
]

export default function Problem() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-20 px-6 bg-[#080808]">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:overflow-visible snap-x snap-mandatory md:snap-none">
          {CARDS.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="flex-shrink-0 snap-center w-[280px] md:w-auto bg-[#111] border border-[#1E1E1E] rounded-2xl p-6 hover:border-[#333] transition-colors"
            >
              <div className="text-3xl mb-4">{card.emoji}</div>
              <p className="text-[#999] text-sm leading-relaxed whitespace-pre-line">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-14 text-center"
        >
          <p className="text-white text-xl md:text-2xl font-bold leading-snug">
            Não é falta de atenção. É excesso de mensagem.
          </p>
          <p className="text-[#666] mt-3 text-base">
            O WhatsApp não foi feito pra lembrar por você.<br className="hidden md:block" />
            O Jarvis foi.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
