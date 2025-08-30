import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Analytics } from '@/components/Analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://your-portfolio.com'),
  title: 'Mohan Reddy - Python Developer & AI/ML Enthusiast',
  description: 'Python Developer & AI/ML Enthusiast, passionate about building scalable backend systems and AI-driven applications. Based in Hyderabad, India.',
  keywords: ['Python Developer', 'AI/ML', 'Backend Development', 'FastAPI', 'Flask', 'Machine Learning', 'Hyderabad'],
  authors: [{ name: 'Mohan Reddy' }],
  creator: 'Mohan Reddy',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-portfolio.com',
    title: 'Mohan Reddy - Python Developer & AI/ML Enthusiast',
    description: 'Python Developer & AI/ML Enthusiast, passionate about building scalable backend systems and AI-driven applications.',
    siteName: 'Mohan Reddy Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohan Reddy - Python Developer & AI/ML Enthusiast',
    description: 'Python Developer & AI/ML Enthusiast, passionate about building scalable backend systems and AI-driven applications.',
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
