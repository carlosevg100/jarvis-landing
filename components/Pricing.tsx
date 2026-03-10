'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import RegisterModal from './RegisterModal'

export default function Pricing() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [open, setOpen] = useState(false)

  return (
    <>
      <section id="preco" className="py-24 px-6 bg-[#080808]">
        <div ref={ref} className="max-w-md mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="bg-[#111] border border-[#1E1E1E] rounded-3xl p-10"
          >
            <p className="text-[#666] text-sm mb-6">
              Organize sua vida por menos do que um café por semana.
            </p>
            <div className="mb-2">
              <span className="text-[#444] text-lg">R$</span>
              <span className="text-white text-7xl font-black tracking-tight mx-1">19</span>
              <span className="text-white text-3xl font-black">,90</span>
            </div>
            <div className="text-[#25D366] text-sm font-medium mb-8">/ mês</div>
            <div className="flex flex-col gap-2 mb-8 text-sm">
              {['3 dias grátis — sem cartão agora', 'Cancela quando quiser, sem burocracia', 'Sem contrato. Sem anuidade. Sem pegadinha.'].map(f => (
                <div key={f} className="flex items-center gap-2 text-[#666]">
                  <span className="text-[#25D366] text-xs">✓</span> {f}
                </div>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setOpen(true)}
              className="w-full bg-[#25D366] text-black font-bold text-base py-4 rounded-2xl hover:bg-[#20BD5A] transition-colors shadow-lg shadow-[#25D366]/20"
            >
              Quero testar grátis →
            </motion.button>
            <p className="text-[#333] text-xs mt-4">
              Começa grátis. Continua porque faz sentido.
            </p>
          </motion.div>
        </div>
      </section>
      <RegisterModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
