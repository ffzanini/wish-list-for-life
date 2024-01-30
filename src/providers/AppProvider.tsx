'use client'
import { ThemeProvider } from 'next-themes'
import { InternacionalizaionProvider } from '@/context/internacionalization-context'

export function AppProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <InternacionalizaionProvider>{children}</InternacionalizaionProvider>
    </ThemeProvider>
  )
}

export default AppProvider
