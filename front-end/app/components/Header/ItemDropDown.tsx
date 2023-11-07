'use client'

import { useState } from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import ListItemIcon from '@mui/material/ListItemIcon'
import ContentPaste from '@mui/icons-material/ContentPaste'
import ListItemText from '@mui/material/ListItemText'

interface ItemDropDownTypes {
  label: string
  dropDown?: string[]
}

export default function ItemDropDown({ label, dropDown }: ItemDropDownTypes) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Button
        id={'basic-button' + '-' + label}
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownOutlinedIcon />}
        sx={{ color: '#fff' }}
      >
        <Typography
          variant={'body1'}
          sx={{ fontWeight: 500, fontSize: '0.875rem' }}
        >
          {label}
        </Typography>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
      >
        {dropDown?.map((item: string, index: number) => (
          <MenuItem key={item + index} onClick={handleClose}>
            <ListItemIcon>
              <ContentPaste fontSize="small" />
            </ListItemIcon>
            <ListItemText>{item}</ListItemText>
            <Typography variant="body2" color="text.secondary">
              ⌘V
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}
