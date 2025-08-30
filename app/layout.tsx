import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Analytics } from '@/components/Analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sai Mohan Reddy - Python Developer & AI/ML Enthusiast',
  description: 'Personal portfolio showcasing Python development, AI/ML projects, and full-stack applications. Specializing in FastAPI, Flask, and machine learning solutions.',
  keywords: ['Python Developer', 'AI/ML', 'FastAPI', 'Flask', 'Machine Learning', 'Full Stack Developer', 'Portfolio'],
  authors: [{ name: 'Sai Mohan Reddy' }],
  creator: 'Sai Mohan Reddy',
  publisher: 'Sai Mohan Reddy',
  metadataBase: new URL('https://mohanreddy8474.github.io'),
  openGraph: {
    title: 'Sai Mohan Reddy - Python Developer & AI/ML Enthusiast',
    description: 'Personal portfolio showcasing Python development, AI/ML projects, and full-stack applications.',
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
    title: 'Sai Mohan Reddy - Python Developer & AI/ML Enthusiast',
    description: 'Personal portfolio showcasing Python development, AI/ML projects, and full-stack applications.',
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
