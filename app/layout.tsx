import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
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
    <html lang="cs" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-bg text-text antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
