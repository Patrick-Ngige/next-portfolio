import './globals.css'
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navigation from '@/components/Navigation'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Patrick Ngige - Creative Technologist Portfolio',
  description: 'Creative Technologist passionate about bridging technology, creativity, and marketing through innovative digital experiences. Specializing in AI, VR, and interactive web development.',
  keywords: 'Creative Technologist, Front-End Developer, AI Innovator, VR Developer, Interactive Design, Web Development, Portfolio',
  authors: [{ name: 'Patrick Ngige' }],
  openGraph: {
    title: 'Patrick Ngige - Creative Technologist',
    description: 'Bridging technology, creativity, and marketing through innovative digital experiences.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patrick Ngige - Creative Technologist',
    description: 'Bridging technology, creativity, and marketing through innovative digital experiences.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body 
        className="min-h-screen bg-background-page text-text-primary"
        suppressHydrationWarning
      >
        <ThemeProvider>
          {/* <Navigation /> */}
          <main className="relative min-h-screen flex flex-col">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}