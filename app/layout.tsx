import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chart — Know Your Body',
  description: 'AI-powered longitudinal women\'s health record.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
