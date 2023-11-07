'use client'

import { useState } from 'react'
import Box from '@mui/material/Box'
import ModeSelect from '../ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import SvgIcon from '@mui/material/SvgIcon'
import TrelloIcon from '@/public/svgs/trello.svg'
import Button from '@mui/material/Button'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import Typography from '@mui/material/Typography'
import ItemDropDown from './ItemDropDown'
import Badge from '@mui/material/Badge'
import TextField from '@mui/material/TextField'
import Tooltip from '@mui/material/Tooltip'
import Profile from './Profile'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import InputAdornment from '@mui/material/InputAdornment'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'

export default function Header() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => theme.trello.headerHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 3,
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0'
      }}
    >
      <Box sx={boxContainerStyle}>
        <AppsIcon />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            fontWeight: 500
          }}
        >
          <SvgIcon component={TrelloIcon} inheritViewBox fontSize="small" />
          <Typography variant="body1" sx={{ fontWeight: '700' }}>
            Trello
          </Typography>
        </Box>

        <ItemDropDown
          label="Workspaces"
          dropDown={['Profile', 'My account', 'Logout']}
        />
        <ItemDropDown
          label="Recent"
          dropDown={['Profile', 'My account', 'Logout']}
        />
        <ItemDropDown
          label="Starred"
          dropDown={['Profile', 'My account', 'Logout']}
        />
        <ItemDropDown
          label="Templates"
          dropDown={['Profile', 'My account', 'Logout']}
        />
        <Button
          variant="outlined"
          sx={{
            fontWeight: '500',
            color: '#fff',
            border: 'none',
            '&:hover': {
              border: 'none'
            }
          }}
          startIcon={<LibraryAddIcon />}
        >
          Create
        </Button>
      </Box>
      <Box sx={boxContainerStyle}>
        <TextField
          type="text"
          size="small"
          label="Search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlinedIcon
                  sx={{
                    color: '#fff'
                  }}
                />
              </InputAdornment>
            ),

            endAdornment: (
              <InputAdornment
                position="start"
                sx={{ mr: 0 }}
                onClick={() => {
                  setSearchValue('')
                }}
              >
                {
                  <CloseOutlinedIcon
                    sx={{
                      color: searchValue ? '#fff' : 'transparent',
                      cursor: searchValue ? 'pointer' : 'default',
                      textAlign: 'right'
                    }}
                  />
                }
              </InputAdornment>
            )
          }}
          sx={{
            '& label': { color: '#fff' },
            '& input': { color: '#fff', fontSize: '0.875rem' },
            '& label.Mui-focused': { color: '#fff' },
            '& .MuiOutlinedInput-root': {
              px: 2,
              '& fieldset': { borderColor: '#fff' },
              '&:hover fieldset': {
                borderColor: '#fff'
              },
              '&.Mui-focused fieldset': { borderColor: '#fff' }
            }
          }}
        />
        <ModeSelect />
        <Tooltip title="Notifications">
          <Badge color="warning" variant="dot" sx={{ cursor: 'pointer' }}>
            <NotificationsNoneOutlinedIcon />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineOutlinedIcon sx={{ cursor: 'pointer' }} />
        </Tooltip>

        <Profile />
      </Box>
    </Box>
  )
}

const boxContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 3,
  color: '#fff'
}
