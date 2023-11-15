'use client'

import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import DragHandleOutlinedIcon from '@mui/icons-material/DragHandleOutlined'
import { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities'
import Tooltip from '@mui/material/Tooltip'

function ColumnFooter({
  listeners
}: {
  listeners: SyntheticListenerMap | undefined
}) {
  return (
    <Box
      {...listeners}
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

      <Tooltip title="Drag">
        <IconButton sx={{ borderRadius: 1 }}>
          <DragHandleOutlinedIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </Box>
  )
}

export default ColumnFooter
