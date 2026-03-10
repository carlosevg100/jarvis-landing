'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import RegisterModal from './RegisterModal'

export default function FinalCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [open, setOpen] = useState(false)

  return (
    <>
      <section className="py-28 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#25D366]/8 rounded-full blur-3xl pointer-events-none" />
        <div ref={ref} className="max-w-2xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight mb-6"
          >
            Você já encaminha mensagens todo dia.<br />
            <span className="text-[#25D366]">Agora elas trabalham por você.</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setOpen(true)}
              className="w-full sm:w-auto bg-[#25D366] text-black font-bold text-lg px-10 py-5 rounded-full hover:bg-[#20BD5A] transition-colors shadow-xl shadow-[#25D366]/25"
            >
              Começar grátis agora →
            </motion.button>
            <p className="text-[#444] text-sm mt-4">
              Sem cadastro complicado. Só o WhatsApp que você já tem.
            </p>
          </motion.div>
        </div>
      </section>
      <RegisterModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
