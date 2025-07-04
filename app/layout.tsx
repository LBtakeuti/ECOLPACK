import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'エコロパック - 生分解性緩衝材',
  description: 'ブランフォーム、エコロパットなど環境にやさしい緩衝材を提供',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}