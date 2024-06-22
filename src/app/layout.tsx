import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeSwitcher } from './components/ThemeSwitcher'
import { NextUIProviderTheme } from './NextUIProviderTheme'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Leyu App',
  description: 'Hackathon Rimac 2024',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en light'>
      <body className={`${inter.className} text-[#111] dark:text-[#F7F8FB]`}>
        {/* <NextUIProviderTheme> */}
        {/* <ThemeSwitcher /> */}
        {children}
        {/* </NextUIProviderTheme> */}
      </body>
    </html>
  )
}
