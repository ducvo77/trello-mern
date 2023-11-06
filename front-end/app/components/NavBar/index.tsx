'use client'

import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard'
import VpnLockOutlinedIcon from '@mui/icons-material/VpnLockOutlined'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined'
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined'
import Button from '@mui/material/Button'
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'

function NavBar() {
  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => theme.trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: 'primary.main',
        borderTop: '1px solid #00bfa5',
        px: 8
      }}
    >
      <Box sx={boxContainerStyle}>
        <Chip
          sx={chipStyle}
          clickable
          icon={<SpaceDashboardIcon />}
          label="DucVo MERN Stack Board"
        />
        <Chip
          sx={chipStyle}
          clickable
          icon={<VpnLockOutlinedIcon />}
          label="Public/ Private Workspace"
        />
        <Chip
          sx={chipStyle}
          clickable
          icon={<AddToDriveIcon />}
          label="Add to google drive"
        />
        <Chip
          sx={chipStyle}
          clickable
          icon={<BoltOutlinedIcon />}
          label="Automation"
        />
        <Chip
          sx={chipStyle}
          clickable
          icon={<FilterListOutlinedIcon />}
          label="Filter"
        />
      </Box>
      <Box sx={boxContainerStyle}>
        <Button
          variant="outlined"
          startIcon={<PersonAddOutlinedIcon />}
          sx={{ fontWeight: 600 }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={7}
          total={50}
          sx={{
            '& .MuiAvatar-root': {
              width: 28,
              height: 28,
              fontSize: '0.75rem'
            }
          }}
        >
          <Tooltip title="hello" sx={{ cursor: 'pointer' }}>
            <Avatar alt="Remy Sharp" src="/images/avatar.jpg" />
          </Tooltip>
          <Tooltip title="hello" sx={{ cursor: 'pointer' }}>
            <Avatar alt="Remy Sharp" src="/images/avatar.jpg" />
          </Tooltip>
          <Tooltip title="hello" sx={{ cursor: 'pointer' }}>
            <Avatar alt="Remy Sharp" src="/images/avatar.jpg" />
          </Tooltip>
          <Tooltip title="hello" sx={{ cursor: 'pointer' }}>
            <Avatar alt="Remy Sharp" src="/images/avatar.jpg" />
          </Tooltip>
          <Tooltip title="hello" sx={{ cursor: 'pointer' }}>
            <Avatar alt="Remy Sharp" src="/images/avatar.jpg" />
          </Tooltip>
          <Tooltip title="hello" sx={{ cursor: 'pointer' }}>
            <Avatar alt="Remy Sharp" src="/images/avatar.jpg" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default NavBar

const boxContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 3
}
const chipStyle = {
  color: 'primary.main',
  fontWeight: '500',
  textTransform: 'capitalize',
  bgcolor: 'transparent',
  border: 'none',
  px: 1,
  borderRadius: 1,
  '& .MuiChip-icon': {
    color: 'primary.main'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}