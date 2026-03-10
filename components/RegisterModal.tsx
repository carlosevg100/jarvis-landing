'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { X } from 'lucide-react'

type Props = { open: boolean; onClose: () => void }
type Status = 'idle' | 'loading' | 'success' | 'error'

export default function RegisterModal({ open, onClose }: Props) {
  const [name, setName] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  function formatPhone(val: string) {
    const digits = val.replace(/\D/g, '')
    if (digits.length <= 2) return digits
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
    if (digits.length <= 11) return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const digits = whatsapp.replace(/\D/g, '')
    if (digits.length < 10) { setErrorMsg('WhatsApp inválido'); return }
    if (!name.trim()) { setErrorMsg('Nome é obrigatório'); return }

    setStatus('loading')
    setErrorMsg('')

    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://jarvis-backend.vercel.app'
      const phone = digits.startsWith('55') ? digits : `55${digits}`

      const res = await fetch(`${backendUrl}/api/users/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), whatsapp_number: phone }),
      })

      if (res.ok) {
        setStatus('success')
      } else {
        const data = await res.json().catch(() => ({}))
        setErrorMsg(data.error || 'Erro ao cadastrar. Tente novamente.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Erro de conexão. Tente novamente.')
      setStatus('error')
    }
  }

  function handleClose() {
    if (status !== 'loading') {
      onClose()
      setTimeout(() => { setStatus('idle'); setName(''); setWhatsapp(''); setErrorMsg('') }, 300)
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-[#111] border border-[#1E1E1E] rounded-3xl p-7 w-full max-w-sm relative"
            onClick={e => e.stopPropagation()}
          >
            <button onClick={handleClose} className="absolute top-5 right-5 text-[#444] hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-4"
              >
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-white text-xl font-bold mb-2">Pronto!</h3>
                <p className="text-[#888] text-sm leading-relaxed">
                  Você vai receber uma mensagem do Jarvis agora.<br />
                  Fique de olho no WhatsApp!
                </p>
                <button onClick={handleClose} className="mt-6 text-[#25D366] text-sm hover:underline">
                  Fechar
                </button>
              </motion.div>
            ) : (
              <>
                <h3 className="text-white text-xl font-bold mb-1">Começar grátis</h3>
                <p className="text-[#666] text-sm mb-6">3 dias grátis · Sem cartão de crédito agora</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="text-[#666] text-xs mb-1.5 block">Seu nome</label>
                    <input
                      type="text"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="Como posso te chamar?"
                      className="w-full bg-[#0D0D0D] border border-[#222] rounded-xl px-4 py-3 text-white text-sm placeholder-[#444] focus:border-[#25D366] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[#666] text-xs mb-1.5 block">WhatsApp</label>
                    <input
                      type="tel"
                      value={whatsapp}
                      onChange={e => setWhatsapp(formatPhone(e.target.value))}
                      placeholder="(11) 99999-9999"
                      className="w-full bg-[#0D0D0D] border border-[#222] rounded-xl px-4 py-3 text-white text-sm placeholder-[#444] focus:border-[#25D366] focus:outline-none transition-colors"
                    />
                  </div>

                  {errorMsg && (
                    <p className="text-red-400 text-xs">{errorMsg}</p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#25D366] text-black font-bold py-4 rounded-xl disabled:opacity-60 transition-all hover:bg-[#20BD5A]"
                  >
                    {status === 'loading' ? (
                      <span className="flex items-center justify-center gap-2">
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                          className="inline-block w-4 h-4 border-2 border-black/30 border-t-black rounded-full"
                        />
                        Cadastrando...
                      </span>
                    ) : 'Quero começar →'}
                  </motion.button>

                  <p className="text-[#333] text-xs text-center">
                    Você receberá uma mensagem no WhatsApp agora.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
