'use client'

import { Container } from '@mui/material'
import ThemeRegistry from './ThemeRegistry/ThemeRegistry'
import Header from './Header'
import NavBar from './NavBar'
import React, { useEffect, useState } from 'react'

export default function ContainLayout({
  children
}: {
  children: React.ReactNode
}) {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    isClient && (
      <ThemeRegistry>
        <Container
          disableGutters
          maxWidth={false}
          sx={{ maxHeight: '100vh', overflowY: 'hidden' }}
        >
          <Header />
          <NavBar />
          {children}
        </Container>
      </ThemeRegistry>
    )
  )
}
