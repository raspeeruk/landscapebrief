import type { Metadata } from 'next'
import { Atkinson_Hyperlegible, Azeret_Mono, Newsreader } from 'next/font/google'
import './globals.css'

const display = Newsreader({ subsets: ['latin'], variable: '--font-display', display: 'swap', weight: ['400', '600'], style: ['normal', 'italic'] })
const body = Atkinson_Hyperlegible({ subsets: ['latin'], variable: '--font-body', display: 'swap', weight: ['400', '700'] })
const mono = Azeret_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap', weight: ['400', '500'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://landscapebrief.com'),
  title: 'LandscapeBrief.com — Domain available for acquisition',
  description: 'LandscapeBrief.com is available for acquisition: a precise .com for market maps, competitive intelligence, analyst reports or strategy software.',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'LandscapeBrief.com — Domain available for acquisition',
    description: 'A clear name for market maps, competitive intelligence, analyst reports or strategy software.',
    url: '/',
    siteName: 'LandscapeBrief.com',
    type: 'website',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
