'use client'

import Box from '@mui/material/Box'

function NavBar() {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.dark',
        width: '100%',
        height: (theme) => theme.trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center'
      }}
    ></Box>
  )
}

export default NavBar
