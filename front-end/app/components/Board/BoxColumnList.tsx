'use client'

import Box from '@mui/material/Box'
import BoxColumn from './BoxColumn'

function BoxColumnList() {
  return (
    <Box
      sx={{
        width: 'auto',
        px: 3,
        py: 3,
        display: 'flex',
        gap: 4,
        overflowX: 'scroll',
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
        height: (theme) =>
          `calc(100vh - ${theme.trello.headerHeight} - ${theme.trello.boardBarHeight})`
      }}
    >
      <BoxColumn />
      <BoxColumn />
      <BoxColumn />
      <BoxColumn />
      <BoxColumn />
      <BoxColumn />
      <BoxColumn />
      <BoxColumn />
      <BoxColumn />
      <BoxColumn />
    </Box>
  )
}

export default BoxColumnList
