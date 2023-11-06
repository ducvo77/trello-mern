'use client'

import { useCallback, useEffect, useState } from 'react'

import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { useColorScheme } from '@mui/material/styles'
import {
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
  SettingsBrightness as SettingsBrightnessIcon
} from '@mui/icons-material'

export default function ModeSelect() {
  const { mode, setMode } = useColorScheme()
  const [isClient, setIsClient] = useState(false)

  const handleChangeMode = useCallback(
    (event: any) => {
      return setMode(event.target.value)
    },
    [setMode]
  )

  useEffect(() => {
    setIsClient(true)
  }, [])

  // variable css

  const boxClass = { display: 'flex', alignItems: 'center', gap: 2 }

  return (
    <FormControl size="small">
      <InputLabel id="container-mode-label">Mode</InputLabel>
      {isClient && (
        <Select
          labelId="container-mode-label"
          id="container-mode"
          value={mode}
          onChange={handleChangeMode}
          autoWidth
          label="Mode"
        >
          <MenuItem value="light">
            <Box sx={boxClass}>
              <LightModeIcon fontSize="small" />
              <span>Light</span>
            </Box>
          </MenuItem>

          <MenuItem value="dark">
            <Box sx={boxClass}>
              <DarkModeIcon fontSize="small" />
              <span>Dark</span>
            </Box>
          </MenuItem>
          <MenuItem value="system">
            <Box sx={boxClass}>
              <SettingsBrightnessIcon fontSize="small" />
              <span>System</span>
            </Box>
          </MenuItem>
        </Select>
      )}
    </FormControl>
  )
}
