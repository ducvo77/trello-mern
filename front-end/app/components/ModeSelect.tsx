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

  return (
    <FormControl size="small">
      <InputLabel
        id="container-mode-label"
        sx={{
          color: '#fff',
          '&.Mui-focused': {
            color: '#fff'
          }
        }}
      >
        Mode
      </InputLabel>
      {isClient && (
        <Select
          labelId="container-mode-label"
          id="container-mode"
          value={mode}
          onChange={handleChangeMode}
          autoWidth
          label="Mode"
          sx={{
            fontSize: '0.875rem',
            color: '#fff',
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: '#fff'
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#fff '
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#fff '
            },
            '.MuiSvgIcon-root': {
              color: '#fff '
            }
          }}
        >
          <MenuItem value="light" sx={{ fontSize: '0.875rem' }}>
            <Box sx={boxClass}>
              <LightModeIcon fontSize="small" />
              <span>Light</span>
            </Box>
          </MenuItem>

          <MenuItem value="dark" sx={{ fontSize: '0.875rem' }}>
            <Box sx={boxClass}>
              <DarkModeIcon fontSize="small" />
              <span>Dark</span>
            </Box>
          </MenuItem>
          <MenuItem value="system" sx={{ fontSize: '0.875rem' }}>
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

const boxClass = { display: 'flex', alignItems: 'center', gap: 2 }
