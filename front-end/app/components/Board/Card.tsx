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

interface CardType {
  card: Card
}

function Card({ card }: CardType) {
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
      {card.cover && (
        <CardMedia
          component={'img'}
          height="auto"
          width="220"
          image={card.cover}
          alt="Paella dish"
          sx={{ objectFit: 'contain' }}
        />
      )}
      <Typography variant="body1">{card.title}</Typography>
      {(!!card.memberIds.length ||
        !!card.comments.length ||
        !!card.attachments.length) && (
        <CardActions>
          {!!card.memberIds.length && (
            <Button size="small" startIcon={<PeopleOutlineOutlinedIcon />}>
              {card.memberIds.length}
            </Button>
          )}
          {!!card.comments.length && (
            <Button size="small" startIcon={<InsertCommentOutlinedIcon />}>
              {card.comments.length}
            </Button>
          )}
          {!!card.attachments.length && (
            <Button size="small" startIcon={<AttachmentOutlinedIcon />}>
              {card.attachments.length}
            </Button>
          )}
        </CardActions>
      )}
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
