import type { Metadata } from 'next'
import { Newsreader, Atkinson_Hyperlegible, Azeret_Mono } from 'next/font/google'
import './globals.css'

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
})

const atkinsonHyperlegible = Atkinson_Hyperlegible({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '700'],
})

const azeretMono = Azeret_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'CompBrief — Competitive Landscapes in Minutes',
  description: 'Upload a competitor CSV. AI positions them on a 2x2 quadrant, identifies clusters, spots whitespace, and writes the strategy brief. Board-ready in under 3 minutes.',
  openGraph: {
    title: 'CompBrief — Competitive Landscapes in Minutes',
    description: 'Upload a competitor CSV. AI positions them on a 2x2 quadrant, identifies clusters, spots whitespace, and writes the strategy brief.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${newsreader.variable} ${atkinsonHyperlegible.variable} ${azeretMono.variable}`}>
      <body className="min-h-screen bg-[var(--color-bg)] text-[var(--color-ink)] antialiased">
        {children}
      </body>
    </html>
  )
}
