import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RescuMed Emergency communication platform that connects ambulances and hospitals in Sri Lanka',
  description: 'Emergency communication platform that connects ambulances and hospitals in Sri Lanka, reducing response times and improving patient outcomes through real-time tracking and secure data sharing.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
