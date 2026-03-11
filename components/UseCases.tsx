'use client'

import { useState } from 'react'

const CASES = [
  {
    title: 'Grupo de escola',
    before: '200 mensagens, datas perdidas.',
    after: 'Jarvis salva data, lembra automatico.',
  },
  {
    title: 'Reuniao com 5 tarefas',
    before: 'Sem anotacao, entregavel perdido.',
    after: 'Audio vira lista de tarefas, prazos viram lembretes.',
  },
  {
    title: 'Audio de 3 minutos',
    before: 'Esqueceu de ouvir, recado perdido.',
    after: 'Jarvis transcreveu, lembrete programado.',
  },
  {
    title: 'PDF ou print com prazo',
    before: 'Prazo passou.',
    after: 'Jarvis leu, criou lembrete.',
  },
]

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function UseCases() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        {/* Mobile: accordion */}
        <div className="flex flex-col gap-3 md:hidden">
          {CASES.map((c, i) => {
            const isOpen = openIdx === i
            return (
              <div
                key={i}
                className="border border-[rgba(255,255,255,0.08)] rounded-[4px] overflow-hidden"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className="text-white font-medium text-sm">{c.title}</span>
                  <span className="text-[rgba(255,255,255,0.3)]">
                    <ChevronIcon open={isOpen} />
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: isOpen ? '200px' : '0',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="px-5 pb-5">
                    <p className="text-[rgba(255,255,255,0.5)] text-sm mb-3">
                      Antes: {c.before}
                    </p>
                    <div className="border-t border-[rgba(255,255,255,0.08)] my-3" />
                    <p className="text-white text-sm">
                      Depois: {c.after}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Desktop: 2x2 grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-4">
          {CASES.map((c, i) => (
            <div
              key={i}
              className="border border-[rgba(255,255,255,0.08)] rounded-[4px] p-6"
            >
              <h3 className="text-white font-medium text-base mb-4">{c.title}</h3>
              <p className="text-[rgba(255,255,255,0.5)] text-sm mb-3">
                Antes: {c.before}
              </p>
              <div className="border-t border-[rgba(255,255,255,0.08)] my-3" />
              <p className="text-white text-sm">
                Depois: {c.after}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
