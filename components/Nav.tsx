'use client'
import { motion } from 'framer-motion'
import RegisterModal from './RegisterModal'
import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-[#1E1E1E]"
      >
        <span className="text-white text-xl font-black tracking-tight">
          Jarvis<span className="text-[#25D366]">.</span>
        </span>
        <button
          onClick={() => setOpen(true)}
          className="bg-[#25D366] text-black text-sm font-bold px-5 py-2.5 rounded-full hover:bg-[#20BD5A] transition-colors"
        >
          Começar grátis
        </button>
      </motion.nav>
      <RegisterModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
