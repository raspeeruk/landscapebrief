import ConsentScript from "next/script";
import type { Metadata } from 'next'
import { Newsreader, Atkinson_Hyperlegible, Azeret_Mono } from 'next/font/google'
import './globals.css'
import NewsletterSignup from '@/components/NewsletterSignup'

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

const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${newsreader.variable} ${atkinsonHyperlegible.variable} ${azeretMono.variable}`}>
      <head>
        <script
          id="roger-group-consent-default"
          dangerouslySetInnerHTML={{ __html: "window.dataLayer=window.dataLayer||[];window.gtag=window.gtag||function(){window.dataLayer.push(arguments)};window.gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',functionality_storage:'denied',personalization_storage:'denied',security_storage:'granted',wait_for_update:500});" }}
        />
        <ConsentScript
          id="roger-group-consent"
          src="https://rogerson-signups.netlify.app/consent-widget.js"
          strategy="beforeInteractive"
          data-brand="CompBrief"
          data-domain="landscapebrief.com"
          data-analytics="true"
          data-marketing="false"
        />
        {GA4_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`} />
            <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA4_ID}');` }} />
          </>
        )}
      </head>
      <body className="min-h-screen bg-[var(--color-bg)] text-[var(--color-ink)] antialiased">
        {children}
        <NewsletterSignup />
      </body>
    </html>
  )
}
