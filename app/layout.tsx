import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500'] })

export const metadata: Metadata = {
  title: 'Jarvis \u2014 Seu WhatsApp agora tem mem\u00f3ria',
  description: 'Encaminhe qualquer mensagem pro Jarvis \u2014 \u00e1udio, print, PDF. Ele organiza tudo e te lembra na hora certa.',
  openGraph: {
    title: 'Jarvis \u2014 Seu WhatsApp agora tem mem\u00f3ria',
    description: 'Organize sua vida pelo WhatsApp. R$19,90/m\u00eas. 3 dias gr\u00e1tis.',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-bg antialiased`}>
        {children}
      </body>
    </html>
  )
}
