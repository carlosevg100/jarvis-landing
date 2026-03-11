'use client'

import { useState } from 'react'
import RegisterModal from './RegisterModal'

export default function Pricing() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <section id="preco" className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-md mx-auto text-center">
          <div className="border border-[rgba(255,255,255,0.08)] rounded-[4px] p-10">
            <p className="text-[#666666] text-sm mb-6">
              Organize sua vida por menos do que um cafe por semana.
            </p>
            <div className="mb-1">
              <span className="text-white text-5xl font-medium tracking-tight">
                R$ 19,90
              </span>
            </div>
            <div className="text-[rgba(255,255,255,0.5)] text-sm mb-2">/ mes</div>
            <p className="text-[rgba(255,255,255,0.5)] text-sm mb-8">
              3 dias gratis &mdash; cancela quando quiser, sem burocracia
            </p>
            <p className="text-[#666666] text-xs mb-8">
              Sem contrato. Sem anuidade. Sem pegadinha.
            </p>
            <button
              onClick={() => setOpen(true)}
              className="w-full bg-white text-[#0a0a0a] font-medium text-base py-4 rounded-[4px] hover:bg-white/90 transition-colors"
            >
              Quero testar gratis
            </button>
          </div>
        </div>
      </section>
      <RegisterModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
