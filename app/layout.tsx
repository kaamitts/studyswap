import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'StudySwap - Learn by teaching others',
  description: 'A skill exchange platform for students',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}