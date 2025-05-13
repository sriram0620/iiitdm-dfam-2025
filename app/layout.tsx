import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dfam App',
  description: 'Created with Dfam',
  generator: 'Dfam.dev',
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
