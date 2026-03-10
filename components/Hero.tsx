'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import RegisterModal from './RegisterModal'
import PhoneMockup from './PhoneMockup'

export default function Hero() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#25D366]/5 rounded-full blur-3xl pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10 max-w-3xl"
        >
          <h1 className="text-[clamp(2.5rem,7vw,4.5rem)] font-black text-white leading-[1.05] tracking-[-0.03em] mb-6">
            Seu WhatsApp<br />agora tem memória.
          </h1>
          <p className="text-[#888] text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
            Encaminhe qualquer mensagem pro Jarvis — áudio, print, PDF, texto bagunçado.
            Ele organiza tudo e te lembra na hora certa. Sem app novo. Sem login. Só o WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setOpen(true)}
              className="w-full sm:w-auto bg-[#25D366] text-black font-bold text-base px-8 py-4 rounded-full hover:bg-[#20BD5A] transition-colors shadow-lg shadow-[#25D366]/20"
            >
              Começar grátis por 3 dias
            </motion.button>
            <a href="#como-funciona" className="text-[#888] text-sm hover:text-white transition-colors">
              Ver como funciona →
            </a>
          </div>
          <p className="text-[#444] text-xs mt-4">
            Sem cartão de crédito agora · Cancela quando quiser
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative z-10 mt-14"
        >
          <PhoneMockup />
        </motion.div>
      </section>
      <RegisterModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
