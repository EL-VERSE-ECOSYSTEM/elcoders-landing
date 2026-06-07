import type { Metadata, Viewport } from 'next'
import { Suspense } from 'react'
import Script from 'next/script'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Loader } from '@/components/loader'
import './globals.css'

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const metadata: Metadata = {
  title: 'EL CODERS - We Build. You Scale.',
  description: 'EL CODERS: Where Startups Find Their Technical Backbone. Part of EL VERSE ECOSYSTEM.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/elcoders-logo.png', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
    shortcut: '/elcoders-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://pl29668493.effectivecpmnetwork.com/85/97/8d/85978d01dee406ba2641bc677c6fa5f2.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${geist.className} ${geistMono.className} antialiased`}>
        <Suspense fallback={null}>
          <Loader />
        </Suspense>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
