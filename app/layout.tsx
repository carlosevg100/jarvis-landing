import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jarvis — Seu WhatsApp agora tem memória.',
  description: 'Encaminhe qualquer mensagem pro Jarvis — áudio, print, PDF, texto bagunçado. Ele organiza tudo e te lembra na hora certa.',
  openGraph: {
    title: 'Jarvis — Seu WhatsApp agora tem memória.',
    description: 'Organize todos os seus compromissos só encaminhando mensagens no WhatsApp.',
    url: 'https://jarvis-landing.vercel.app',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-[#0a0a0a] antialiased`}>
        {children}
      </body>
    </html>
  )
}
