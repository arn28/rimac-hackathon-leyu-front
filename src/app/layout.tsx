import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import './globals.css'
import { ThemeSwitcher } from './components/ThemeSwitcher'

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
    <html lang='en' className='light'>
      <body
        className={`${inter.className} text-[#111] dark:text-[#fff] dark:bg-[#111]  bg-[#fff]`}
      >
        <Providers>
          {/* <ThemeSwitcher /> */}
          {children}
        </Providers>
      </body>
    </html>
  )
}
