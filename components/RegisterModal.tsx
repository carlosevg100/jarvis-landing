'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

type Props = { open: boolean; onClose: () => void }
type Status = 'idle' | 'loading' | 'success' | 'error'

export default function RegisterModal({ open, onClose }: Props) {
  const [name, setName] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const modalRef = useRef<HTMLDivElement>(null)
  const firstInputRef = useRef<HTMLInputElement>(null)

  function formatPhone(val: string) {
    const digits = val.replace(/\D/g, '')
    if (digits.length <= 2) return digits
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
    if (digits.length <= 11)
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`
  }

  const handleClose = useCallback(() => {
    if (status === 'loading') return
    onClose()
    setTimeout(() => {
      setStatus('idle')
      setName('')
      setWhatsapp('')
      setErrorMsg('')
    }, 300)
  }, [status, onClose])

  // ESC to close
  useEffect(() => {
    if (!open) return
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') handleClose()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, handleClose])

  // Focus trap
  useEffect(() => {
    if (!open) return
    setTimeout(() => firstInputRef.current?.focus(), 100)

    function trapFocus(e: KeyboardEvent) {
      if (e.key !== 'Tab' || !modalRef.current) return
      const focusable = modalRef.current.querySelectorAll<HTMLElement>(
        'input, button, [tabindex]:not([tabindex="-1"])'
      )
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', trapFocus)
    return () => document.removeEventListener('keydown', trapFocus)
  }, [open])

  // Prevent body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const digits = whatsapp.replace(/\D/g, '')
    if (digits.length < 10) {
      setErrorMsg('WhatsApp invalido')
      return
    }
    if (!name.trim()) {
      setErrorMsg('Nome e obrigatorio')
      return
    }

    setStatus('loading')
    setErrorMsg('')

    try {
      const backendUrl =
        process.env.NEXT_PUBLIC_BACKEND_URL ||
        'https://backend-production-f3cb.up.railway.app'
      const phone = digits.startsWith('55') ? digits : `55${digits}`

      const res = await fetch(`${backendUrl}/api/users/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          whatsapp_number: phone,
          source: 'landing',
        }),
      })

      if (res.ok) {
        setStatus('success')
      } else if (res.status === 409) {
        setErrorMsg('Esse numero ja tem uma conta. Verifique seu WhatsApp.')
        setStatus('error')
      } else {
        setErrorMsg('Algo deu errado. Tente de novo.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Algo deu errado. Tente de novo.')
      setStatus('error')
    }
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        ref={modalRef}
        className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-[4px] p-7 w-full max-w-sm relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 text-[rgba(255,255,255,0.3)] hover:text-white transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M12 4L4 12M4 4l8 8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {status === 'success' ? (
          <div className="text-center py-4">
            <h3 className="text-white text-xl font-medium mb-3">Pronto.</h3>
            <p className="text-[rgba(255,255,255,0.5)] text-sm leading-relaxed">
              Voce vai receber uma mensagem do Jarvis em segundos. Guarde o numero.
            </p>
          </div>
        ) : (
          <>
            <h3 className="text-white text-xl font-medium mb-1">Criar minha conta</h3>
            <p className="text-[#666666] text-sm mb-6">
              3 dias gratis. Cancela quando quiser.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-[#666666] text-xs mb-1.5 block">Nome</label>
                <input
                  ref={firstInputRef}
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#0a0a0a] border border-[rgba(255,255,255,0.08)] rounded-[4px] px-4 py-3 text-white text-sm placeholder-[rgba(255,255,255,0.3)] focus:border-white/30 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-[#666666] text-xs mb-1.5 block">WhatsApp</label>
                <input
                  type="tel"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(formatPhone(e.target.value))}
                  placeholder="(11) 99999-9999"
                  className="w-full bg-[#0a0a0a] border border-[rgba(255,255,255,0.08)] rounded-[4px] px-4 py-3 text-white text-sm placeholder-[rgba(255,255,255,0.3)] focus:border-white/30 focus:outline-none transition-colors"
                />
              </div>

              {errorMsg && <p className="text-red-400 text-xs">{errorMsg}</p>}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-white text-[#0a0a0a] font-medium py-4 rounded-[4px] disabled:opacity-60 transition-all hover:bg-white/90"
              >
                {status === 'loading' ? 'Criando...' : 'Criar minha conta'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
