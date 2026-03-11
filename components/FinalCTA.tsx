'use client'

import { useState } from 'react'
import RegisterModal from './RegisterModal'

export default function FinalCTA() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <section className="py-28 px-6 bg-[#0a0a0a]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-white leading-tight tracking-tight mb-6">
            Voce ja encaminha mensagens todo dia. Agora elas trabalham por voce.
          </h2>
          <button
            onClick={() => setOpen(true)}
            className="bg-white text-[#0a0a0a] font-medium text-lg px-10 py-5 rounded-[4px] hover:bg-white/90 transition-colors"
          >
            Comecar gratis agora
          </button>
          <p className="text-[rgba(255,255,255,0.5)] text-sm mt-4">
            Sem cadastro complicado. So o WhatsApp que voce ja tem.
          </p>
        </div>
      </section>
      <RegisterModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
