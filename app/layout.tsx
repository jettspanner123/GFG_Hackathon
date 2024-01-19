import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const inter = Poppins({ subsets: ['devanagari'], weight: ["400"] })

export const metadata: Metadata = {
  title: 'Krishi-Mitra',
  description: 'Friend Of Farmers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
