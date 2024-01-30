import { SpeedInsights } from '@vercel/speed-insights/next'

import { Header, Footer } from '@/components'
import { AppProvider } from '@/providers'
import { fontOpenSans } from './fonts'

import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" translate="no">
      <meta name="google" content="notranslate" />
      <body className={fontOpenSans.className}>
        <AppProvider>
          <Header />
          {children}
          <SpeedInsights />
          <Footer />
        </AppProvider>
      </body>
    </html>
  )
}
