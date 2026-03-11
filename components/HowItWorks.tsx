'use client'

import { useEffect, useRef, useState } from 'react'

const STEPS = [
  {
    num: '01',
    title: 'Voce encaminha',
    desc: 'Qualquer coisa. Audio, print, texto, PDF. O mesmo gesto que voce ja faz todo dia.',
  },
  {
    num: '02',
    title: 'Jarvis entende',
    desc: 'Extrai o que importa \u2014 data, tarefa, compromisso, prazo. Organiza sem voce precisar fazer nada.',
  },
  {
    num: '03',
    title: 'Voce e lembrado',
    desc: 'Na hora certa. No WhatsApp. Sem precisar checar nada. Sem abrir nenhum app.',
  },
]

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="como-funciona" className="py-24 px-6 bg-white">
      <div ref={containerRef} className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          {STEPS.map((step, i) => (
            <div
              key={i}
              className="flex-1 transition-all duration-500"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${i * 150}ms`,
              }}
            >
              <div className="text-[#0a0a0a] text-xs font-medium tracking-widest uppercase mb-3 opacity-40">
                Passo {step.num}
              </div>
              <h3 className="text-[#0a0a0a] font-medium text-lg mb-2">
                {step.title}
              </h3>
              <p className="text-[#666666] text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
        <p
          className="text-center text-[#666666] text-sm mt-16 transition-opacity duration-500"
          style={{
            opacity: visible ? 1 : 0,
            transitionDelay: '500ms',
          }}
        >
          E isso. Tres passos. Uma mudanca permanente.
        </p>
      </div>
    </section>
  )
}
