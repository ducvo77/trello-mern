'use client'

import Box from '@mui/material/Box'
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'
import CardMedia from '@mui/material/CardMedia'
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined'
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined'
import AttachmentOutlinedIcon from '@mui/icons-material/AttachmentOutlined'

function Card() {
  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? 'fff' : '#181721',
        padding: '8px 12px 4px',
        borderRadius: 2,
        boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
        border: '2px solid #fff',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        '&:hover': {
          border: '2px solid #0C66E4'
        },
        '&:hover svg': {
          visibility: 'visible'
        }
      }}
    >
      <CardMedia
        component="img"
        height="100"
        image="https://mui.com/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <Typography variant="body1">
        How can I get access to the super secret document?
      </Typography>
      <CardActions>
        <Button size="small" startIcon={<PeopleOutlineOutlinedIcon />}>
          20
        </Button>
        <Button size="small" startIcon={<InsertCommentOutlinedIcon />}>
          15
        </Button>
        <Button size="small" startIcon={<AttachmentOutlinedIcon />}>
          10
        </Button>
      </CardActions>
      <ModeOutlinedIcon
        sx={{
          position: 'absolute',
          right: 4,
          top: 4,
          visibility: 'hidden'
        }}
      />
    </Box>
  )
}

export default Card
