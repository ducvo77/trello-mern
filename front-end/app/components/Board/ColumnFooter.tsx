'use client'

import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import DragHandleOutlinedIcon from '@mui/icons-material/DragHandleOutlined'

function ColumnFooter() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        p: 2
      }}
    >
      <Button
        startIcon={<AddOutlinedIcon />}
        sx={{
          flexGrow: 1,
          justifyContent: 'left'
        }}
      >
        Add new card
      </Button>

      <IconButton sx={{ borderRadius: 1 }}>
        <DragHandleOutlinedIcon fontSize="small" />
      </IconButton>
    </Box>
  )
}

export default ColumnFooter
