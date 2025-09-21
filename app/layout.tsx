import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Fairy Bloom - Přírodní šperky',
  description: 'Elegantní šperky s opravdovými květinami z českých luk a lesů. Ručně vyráběné šperky s opravdovými květinami zachycenými v čase.',
  keywords: 'šperky, květiny, přírodní, ruční výroba, náhrdelníky, náušnice, prsteny, náramky',
  openGraph: {
    title: 'Fairy Bloom - Přírodní šperky',
    description: 'Elegantní šperky s opravdovými květinami z českých luk a lesů',
    type: 'website',
    locale: 'cs_CZ',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-sans bg-bg text-text antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
