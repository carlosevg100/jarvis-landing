'use client'

import { useState } from 'react'
import RegisterModal from './RegisterModal'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-[rgba(255,255,255,0.08)]">
        <span className="text-white text-xl font-medium tracking-tight">
          Jarvis
        </span>
        <button
          onClick={() => setOpen(true)}
          className="bg-white text-[#0a0a0a] text-sm font-medium px-5 py-2 rounded-[4px] hover:bg-white/90 transition-colors hidden md:block"
        >
          Comecar gratis
        </button>
        <button
          onClick={() => setOpen(true)}
          className="bg-white text-[#0a0a0a] text-sm font-medium px-4 py-2 rounded-[4px] hover:bg-white/90 transition-colors md:hidden"
        >
          gratis
        </button>
      </nav>
      <RegisterModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
