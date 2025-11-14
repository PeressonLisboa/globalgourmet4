import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Global Gourmet4 - Receitas Mundiais',
  description: 'Descubra mais de 450 receitas deliciosas de todo o mundo, com foco na Europa, América Latina e América do Sul. Receitas fáceis, vídeos passo a passo e avaliações.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}