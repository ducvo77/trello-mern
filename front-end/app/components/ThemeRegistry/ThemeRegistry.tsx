'use client'

import * as React from 'react'
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  getInitColorSchemeScript
} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import NextAppDirEmotionCacheProvider from './EmotionCache'
import theme from './theme'

export default function ThemeRegistry({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <React.Fragment>
      {getInitColorSchemeScript({ defaultMode: 'system' })}
      <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
        <CssVarsProvider theme={theme}>
          <CssBaseline />
          {children}
        </CssVarsProvider>
      </NextAppDirEmotionCacheProvider>
    </React.Fragment>
  )
}
