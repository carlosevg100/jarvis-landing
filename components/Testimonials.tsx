'use client'

import { useState } from 'react'

const TESTIMONIALS = [
  {
    quote:
      'Eu estava em 6 grupos de escola ao mesmo tempo. Jarvis foi a primeira coisa que de fato me ajudou a nao perder data. Nao e exagero: reduziu minha ansiedade de domingo a noite.',
    name: 'Fernanda R.',
    detail: '38 anos, Sao Paulo',
    role: 'Mae do Bento (8) e da Luisa (5)',
    initials: 'FR',
  },
  {
    quote:
      'Minha rotina e reuniao atras de reuniao. Eu mandava audio das reunioes pro Jarvis e chegava na proxima ja com o resumo das tarefas pendentes. Meu gestor perguntou o que tinha mudado. Eu disse que tinha contratado um assistente.',
    name: 'Rodrigo M.',
    detail: '34 anos, Curitiba',
    role: 'Gerente Comercial',
    initials: 'RM',
  },
  {
    quote:
      'Tenho uma equipe pequena e a gente se comunica muito por WhatsApp. Antes eu perdia prazo de fornecedor, esquecia de responder cliente, chegava em reuniao sem saber o que tinha sido combinado. Hoje o Jarvis faz isso por mim.',
    name: 'Marcelo T.',
    detail: '41 anos, Belo Horizonte',
    role: 'Dono de oficina mecanica',
    initials: 'MT',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  return (
    <section className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        {/* Mobile: one at a time with nav */}
        <div className="md:hidden">
          <div className="border border-[rgba(255,255,255,0.08)] rounded-[4px] p-6">
            <p className="text-[#999999] text-sm leading-relaxed mb-5">
              &ldquo;{TESTIMONIALS[current].quote}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#666666] text-sm font-medium shrink-0">
                {TESTIMONIALS[current].initials}
              </div>
              <div>
                <div className="text-white font-medium text-sm">
                  {TESTIMONIALS[current].name}
                </div>
                <div className="text-[#666666] text-xs">
                  {TESTIMONIALS[current].role} &middot; {TESTIMONIALS[current].detail}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-4 text-sm text-[rgba(255,255,255,0.5)]">
            <button
              onClick={() => setCurrent(prev => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))}
              className="hover:text-white transition-colors"
            >
              &larr; anterior
            </button>
            <button
              onClick={() => setCurrent(prev => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1))}
              className="hover:text-white transition-colors"
            >
              proximo &rarr;
            </button>
          </div>
        </div>

        {/* Desktop: 3 in a row */}
        <div className="hidden md:grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="border border-[rgba(255,255,255,0.08)] rounded-[4px] p-6 flex flex-col"
            >
              <p className="text-[#999999] text-sm leading-relaxed flex-1 mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#666666] text-sm font-medium shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-white font-medium text-sm">{t.name}</div>
                  <div className="text-[#666666] text-xs">
                    {t.role} &middot; {t.detail}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
