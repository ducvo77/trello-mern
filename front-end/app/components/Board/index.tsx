'use client'

import Box from '@mui/material/Box'

function Board() {
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
        width: '100%',
        height: (theme) =>
          `calc(100vh - ${theme.trello.headerHeight} - ${theme.trello.boardBarHeight})`,
        display: 'flex',
        alignItems: 'center'
      }}
    ></Box>
  )
}

export default Board
