import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Analytics } from '@/components/Analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sai Mohan Reddy - Python Backend Engineer',
  description: 'Portfolio of a Python Backend Engineer with 3.5+ years of experience building scalable backend systems, AI/LLM applications, and REST APIs with FastAPI, Flask, and AWS.',
  keywords: ['Python Backend Engineer', 'AI/LLM', 'FastAPI', 'Flask', 'LangGraph', 'AWS', 'REST APIs', 'Portfolio'],
  authors: [{ name: 'Sai Mohan Reddy' }],
  creator: 'Sai Mohan Reddy',
  publisher: 'Sai Mohan Reddy',
  metadataBase: new URL('https://mohanreddy8474.github.io'),
  openGraph: {
    title: 'Sai Mohan Reddy - Python Backend Engineer',
    description: 'Portfolio of a Python Backend Engineer with 3.5+ years of experience building scalable backend systems, AI/LLM applications, and REST APIs.',
    url: 'https://mohanreddy8474.github.io/portfolio',
    siteName: 'Sai Mohan Reddy Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sai Mohan Reddy Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sai Mohan Reddy - Python Backend Engineer',
    description: 'Portfolio of a Python Backend Engineer with 3.5+ years of experience building scalable backend systems, AI/LLM applications, and REST APIs.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
