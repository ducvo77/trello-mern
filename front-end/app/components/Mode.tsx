'use client'

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useTheme } from 'next-themes'

const Mode = () => {
  const { theme, setTheme } = useTheme()

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={theme}
        label="Age"
      >
        <MenuItem value={'dark'} onClick={() => setTheme('dark')}>
          Dark
        </MenuItem>
        <MenuItem value={'light'} onClick={() => setTheme('light')}>
          Light
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default Mode
