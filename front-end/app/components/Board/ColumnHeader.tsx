'use client'

import { ChangeEvent, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'
import Divider from '@mui/material/Divider'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ContentCutOutlinedIcon from '@mui/icons-material/ContentCutOutlined'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined'
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined'
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined'
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined'
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined'
import TextField from '@mui/material/TextField'

interface ColumnHeaderType {
  column: Column
}

function ColumnHeader({ column }: ColumnHeaderType) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [title, setTitle] = useState<string>(column.title)

  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
    console.log(e.target.value)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'start',
        gap: 2,
        mb: 2
      }}
    >
      <Box
        sx={{
          minWidth: 'calc(100% - 40px)',
          maxWidth: 'calc(100% - 40px)',
          position: 'relative'
        }}
      >
        <Typography
          variant="h2"
          sx={{
            width: '100%',
            height: 'auto',
            fontWeight: 500,
            padding: '6px 8px 6px 12px',
            lineHeight: 1.6,
            color: 'transparent'
          }}
        >
          {title}
        </Typography>

        <TextField
          multiline
          type="text"
          id={`filled-title-column-${column._id}`}
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            backgroundColor: 'transparent',
            '& .MuiInputBase-root': {
              p: 0
            },
            '& .MuiInputBase-input': {
              fontWeight: 500,
              padding: '6px 8px 6px 12px',
              lineHeight: 1.6,
              fontSize: '0.875rem',
              width: '100%',
              height: 'auto'
            },
            '& fieldset': {
              borderColor: 'transparent'
            }
          }}
          value={title}
          variant="outlined"
          onChange={handleChangeTitle}
        />
      </Box>
      <Tooltip title="More Options">
        <Button
          id={'button-column-header'}
          aria-controls={open ? 'basic-button-column-header' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{ minWidth: 10 }}
        >
          <MoreHorizOutlinedIcon />
        </Button>
      </Tooltip>
      <Menu
        id="basic-button-column-header"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <AddCardOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Add new card</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ContentCutOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Cut</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ContentCopyOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Copy</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ContentPasteOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Paste</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <DeleteForeverOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Remove this column</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ArchiveOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Archive this column</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default ColumnHeader
