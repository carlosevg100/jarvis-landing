'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState, useCallback } from 'react'

const SEQUENCES = [
  [
    { type: 'user', text: 'Encaminhando mensagem...', delay: 0 },
    { type: 'user', text: '[audio 4:12]', delay: 1000 },
    { type: 'jarvis', text: 'Processando...', delay: 2000 },
    {
      type: 'jarvis',
      text: 'Reuniao com Alberto \u2014 amanha, 15h.\nPagar fornecedor \u2014 sexta, R$ 2.400.\nBuscar Filippo \u2014 quinta, 17h.',
      delay: 3500,
    },
  ],
  [
    { type: 'user', text: 'Encaminhando mensagem...', delay: 0 },
    { type: 'user', text: '[print do grupo da escola]', delay: 1000 },
    { type: 'jarvis', text: 'Processando...', delay: 2000 },
    {
      type: 'jarvis',
      text: 'Festa junina \u2014 21/06, 14h.\nLevar roupa caipira + R$15.\nEntrega autorizacao \u2014 ate sexta.',
      delay: 3500,
    },
  ],
]

export default function WhatsAppDemo() {
  const [visible, setVisible] = useState<number[]>([])
  const [seqIdx, setSeqIdx] = useState(0)
  const [fading, setFading] = useState(false)

  const runSequence = useCallback((seq: typeof SEQUENCES[0]) => {
    setVisible([])
    setFading(false)
    const timers: ReturnType<typeof setTimeout>[] = []

    seq.forEach((msg, i) => {
      timers.push(
        setTimeout(() => {
          setVisible(prev => [...prev, i])
        }, msg.delay)
      )
    })

    timers.push(
      setTimeout(() => {
        setFading(true)
      }, 6000)
    )

    return timers
  }, [])

  useEffect(() => {
    let timers = runSequence(SEQUENCES[seqIdx])

    const loop = setInterval(() => {
      setSeqIdx(prev => {
        const next = (prev + 1) % SEQUENCES.length
        timers = runSequence(SEQUENCES[next])
        return next
      })
    }, 8000)

    return () => {
      clearInterval(loop)
      timers.forEach(clearTimeout)
    }
  }, [runSequence, seqIdx])

  const seq = SEQUENCES[seqIdx]

  return (
    <div className="relative mx-auto" style={{ width: 300 }}>
      {/* iPhone frame in CSS */}
      <div className="relative bg-[#1c1c1e] rounded-[44px] p-3 shadow-2xl border border-[#333]">
        {/* Dynamic Island */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10" />

        <div className="bg-black rounded-[36px] overflow-hidden" style={{ height: 520 }}>
          {/* WhatsApp header */}
          <div className="bg-[#1f2c34] px-4 pt-10 pb-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#2a3942] flex items-center justify-center text-white font-medium text-sm">
              J
            </div>
            <div>
              <div className="text-white font-medium text-sm">Jarvis</div>
              <div className="text-[#8696a0] text-xs">online</div>
            </div>
          </div>

          {/* Chat area */}
          <div
            className="p-3 flex flex-col gap-2 overflow-hidden transition-opacity duration-500"
            style={{
              height: 'calc(100% - 72px)',
              background: '#0b141a',
              opacity: fading ? 0 : 1,
            }}
          >
            <AnimatePresence>
              {seq.map((msg, i) =>
                visible.includes(i) ? (
                  <motion.div
                    key={`${seqIdx}-${i}`}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className={`max-w-[85%] ${msg.type === 'user' ? 'self-end' : 'self-start'}`}
                  >
                    {msg.type === 'jarvis' && (
                      <span className="text-[#8696a0] text-[10px] font-medium ml-1 mb-0.5 block">
                        Jarvis
                      </span>
                    )}
                    <div
                      className={`px-3 py-2 text-xs leading-relaxed whitespace-pre-wrap ${
                        msg.type === 'user'
                          ? 'bg-[#005c4b] text-white rounded-lg rounded-br-sm'
                          : 'bg-white text-[#111] rounded-lg rounded-bl-sm'
                      }`}
                    >
                      {msg.text}
                      <span className="text-[9px] opacity-50 float-right mt-1 ml-2">
                        {msg.type === 'user' ? '14:32' : '14:32'}
                      </span>
                    </div>
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
