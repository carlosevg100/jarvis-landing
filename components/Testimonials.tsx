'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const TESTIMONIALS = [
  {
    quote: 'Eu estava em 6 grupos de escola ao mesmo tempo. Jarvis foi a primeira coisa que de fato me ajudou a não perder data. Não é exagero: reduziu minha ansiedade de domingo à noite.',
    name: 'Fernanda R.',
    role: 'Mãe do Bento (8) e da Luísa (5)',
    age: '38 anos, São Paulo',
    initials: 'FR',
    color: '#8B5CF6',
  },
  {
    quote: 'Minha rotina é reunião atrás de reunião. Eu mandava áudio das reuniões pro Jarvis e chegava na próxima já com o resumo das tarefas pendentes. Meu gestor perguntou o que tinha mudado. Eu disse que tinha contratado um assistente.',
    name: 'Rodrigo M.',
    role: 'Gerente Comercial',
    age: '34 anos, Curitiba',
    initials: 'RM',
    color: '#F59E0B',
  },
  {
    quote: 'Tenho uma equipe pequena e a gente se comunica muito por WhatsApp. Antes eu perdia prazo de fornecedor, esquecia de responder cliente, chegava em reunião sem saber o que tinha sido combinado. Hoje o Jarvis faz isso por mim.',
    name: 'Marcelo T.',
    role: 'Dono de oficina mecânica',
    age: '41 anos, Belo Horizonte',
    initials: 'MT',
    color: '#EF4444',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 px-6">
      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-black text-white text-center mb-12 tracking-tight"
        >
          Quem já usa, não para.
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12 }}
              className="bg-[#111] border border-[#1E1E1E] rounded-2xl p-6 flex flex-col"
            >
              <p className="text-[#999] text-sm leading-relaxed flex-1 mb-5">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-black flex-shrink-0"
                  style={{ background: t.color + '33', border: `1px solid ${t.color}44` }}
                >
                  <span style={{ color: t.color }}>{t.initials}</span>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-[#555] text-xs">{t.role} · {t.age}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
