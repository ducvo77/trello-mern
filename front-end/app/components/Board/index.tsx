'use client'

import Box from '@mui/material/Box'

function Board() {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
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
