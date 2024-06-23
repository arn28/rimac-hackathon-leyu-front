// app/providers.tsx
'use client'

import { NextUIProvider } from '@nextui-org/system'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function NextUIProviderTheme({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <NextUIProvider>
      {' '}
      <NextThemesProvider attribute='class' defaultTheme='light'>
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  )
}
