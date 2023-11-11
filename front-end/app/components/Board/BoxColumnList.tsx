'use client'

import Box from '@mui/material/Box'
import BoxColumn from './BoxColumn'
import { HEADER_HEIGHT, BOARD_BAR_HEIGHT } from '@/app/utils/constants'
import Button from '@mui/material/Button'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'

interface BoxColumnListType {
  columns: Column[]
}

function BoxColumnList({ columns }: BoxColumnListType) {
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
        height: `calc(100vh - ${HEADER_HEIGHT} - ${BOARD_BAR_HEIGHT})`
      }}
    >
      {columns.map((column) => (
        <BoxColumn key={column._id} column={column} />
      ))}

      <Box>
        <Button
          startIcon={<AddBoxOutlinedIcon />}
          sx={{
            color: '#fff',
            bgcolor: '#ffffff3d',
            px: 5,
            py: 2,
            '&:hover': {
              bgcolor: '#ffffff49'
            }
          }}
        >
          Add new column
        </Button>
      </Box>
    </Box>
  )
}

export default BoxColumnList
