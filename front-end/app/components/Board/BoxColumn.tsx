'use client'

import Box from '@mui/material/Box'
import Card from './Card'
import ColumnHeader from './ColumnHeader'
import ColumnFooter from './ColumnFooter'

function BoxColumn() {
  return (
    <Box sx={{ width: 'auto', height: 'auto' }}>
      <Box
        sx={{
          minWidth: '272px',
          maxWidth: '272px',
          height: 'auto',
          maxHeight: 'calc(100% - 24px)',
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          borderRadius: 2,
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'
        }}
      >
        <ColumnHeader />
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            height: 'auto',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
            flexGrow: 1,
            overflowY: 'auto'
          }}
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Box>
        <ColumnFooter />
      </Box>
    </Box>
  )
}

export default BoxColumn
