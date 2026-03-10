'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const CONVERSATION = [
  { type: 'user', text: '📸 [Print encaminhado do grupo da escola]', delay: 0 },
  { type: 'jarvis', text: '⏳ Processando...', delay: 1200 },
  { type: 'jarvis', text: '✅ Entendi! Salvei 3 itens:\n\n📅 Festa junina — Seg 21/06 14h\n   📍 Escola Amadeu Amaral\n   Levar: roupa caipira, R$15\n\n✅ Entregar autorização — até Sex 07/06\n\n🔔 Reunião de pais — Ter 17/06 19h', delay: 2600 },
  { type: 'jarvis', text: '💡 Te lembro antes de cada compromisso. Alguma correção?', delay: 4000 },
]

export default function PhoneMockup() {
  const [visible, setVisible] = useState<number[]>([])

  useEffect(() => {
    CONVERSATION.forEach((msg, i) => {
      setTimeout(() => {
        setVisible(prev => [...prev, i])
      }, msg.delay)
    })

    const loop = setInterval(() => {
      setVisible([])
      CONVERSATION.forEach((msg, i) => {
        setTimeout(() => setVisible(prev => [...prev, i]), msg.delay)
      })
    }, 8000)

    return () => clearInterval(loop)
  }, [])

  return (
    <div className="relative mx-auto" style={{ width: 300 }}>
      <div className="relative bg-[#1C1C1E] rounded-[44px] p-3 shadow-2xl border border-[#333]">
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10" />
        <div className="bg-[#000] rounded-[36px] overflow-hidden" style={{ height: 580 }}>
          <div className="bg-[#128C7E] px-4 pt-10 pb-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center text-black font-black text-sm">J</div>
            <div>
              <div className="text-white font-semibold text-sm">Jarvis</div>
              <div className="text-[#B2DFDB] text-xs">online</div>
            </div>
          </div>
          <div className="bg-[#0B141A] h-full p-3 flex flex-col gap-2 overflow-hidden">
            <AnimatePresence>
              {CONVERSATION.map((msg, i) => (
                visible.includes(i) && (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className={`max-w-[85%] ${msg.type === 'user' ? 'self-end' : 'self-start'}`}
                  >
                    <div className={`px-3 py-2 rounded-2xl text-xs leading-relaxed whitespace-pre-wrap ${
                      msg.type === 'user'
                        ? 'bg-[#005C4B] text-white rounded-br-sm'
                        : 'bg-[#1F2C34] text-white rounded-bl-sm'
                    }`}>
                      {msg.text}
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-16 bg-[#25D366]/20 blur-2xl rounded-full" />
    </div>
  )
}
