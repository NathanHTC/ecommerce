'use client'

import React from 'react'

import { AuthProvider } from '../_providers/Auth'
import { CartProvider } from '../_providers/Cart'
import { FIlterProvider } from './FIlter'
import { ThemeProvider } from './Theme'

export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <FIlterProvider>
          <CartProvider>{children}</CartProvider>
        </FIlterProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}
