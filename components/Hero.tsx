'use client'

import { useState } from 'react'
import RegisterModal from './RegisterModal'
import WhatsAppDemo from './WhatsAppDemo'

export default function Hero() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16 text-center bg-[#0a0a0a]">
        <div className="max-w-3xl">
          <h1 className="text-[clamp(2.2rem,6vw,4rem)] font-medium text-white leading-[1.08] tracking-[-0.03em] mb-6">
            Seu WhatsApp agora tem memoria.
          </h1>
          <p className="text-[rgba(255,255,255,0.5)] text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed font-light">
            Encaminhe qualquer mensagem pro Jarvis &mdash; audio, print, PDF, texto baguncado.
            Ele organiza tudo e te lembra na hora certa. Sem app novo. Sem login. So o WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button
              onClick={() => setOpen(true)}
              className="w-full sm:w-auto bg-white text-[#0a0a0a] font-medium text-base px-8 py-4 rounded-[4px] hover:bg-white/90 transition-colors"
            >
              Comecar gratis por 3 dias
            </button>
            <a
              href="#como-funciona"
              className="text-[rgba(255,255,255,0.5)] text-sm hover:text-white transition-colors"
            >
              Ver como funciona
            </a>
          </div>
        </div>

        <div className="mt-14">
          <WhatsAppDemo />
        </div>
      </section>
      <RegisterModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
