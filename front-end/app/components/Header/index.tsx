'use client'

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

export default function Header() {
  return (
    <Box
      px={8}
      sx={{
        width: '100%',
        height: (theme) => theme.trello.headerHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: 'primary.main'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
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
        <Button variant="outlined" sx={{ fontWeight: '500' }}>
          Create
        </Button>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
        <TextField type="search" size="small" label="Search..." />
        <ModeSelect />
        <Tooltip title="Notifications">
          <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer' }}>
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
