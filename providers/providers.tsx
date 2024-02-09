'use client'

import {NextUIProvider} from '@nextui-org/react'

export function ProviderNextUI({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}