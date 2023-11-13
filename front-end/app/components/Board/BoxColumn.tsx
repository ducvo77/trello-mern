'use client'

import Box from '@mui/material/Box'
import Card from './Card'
import ColumnHeader from './ColumnHeader'
import ColumnFooter from './ColumnFooter'
import { mapOrder } from '@/app/utils/sorts'
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

interface BoxColumnType {
  column: Column
}

function BoxColumn({ column }: BoxColumnType) {
  const orderedCards = mapOrder(column.cards, column.cardOrderIds, '_id')

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: column._id, data: column })

  const dndKitStyle = {
    touchAction: 'none',
    transform: CSS.Translate.toString(transform),
    transition,
    height: '100%',
    opacity: isDragging ? 0.5 : undefined
  }

  return (
    <div ref={setNodeRef} style={dndKitStyle} {...attributes}>
      <Box
        {...listeners}
        sx={{
          minWidth: '272px',
          maxWidth: '272px',
          height: 'fit-content',
          maxHeight: 'calc(100% - 24px)',
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          borderRadius: 2,
          cursor: 'pointer',
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'
        }}
      >
        <ColumnHeader column={column} />
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            height: 'auto',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
            flexGrow: 1,
            overflowY: 'auto'
          }}
        >
          <SortableContext
            items={orderedCards.map((c) => c._id)}
            strategy={verticalListSortingStrategy}
          >
            {orderedCards.map((card) => (
              <Card key={card._id} card={card} />
            ))}
          </SortableContext>
        </Box>
        <ColumnFooter />
      </Box>
    </div>
  )
}

export default BoxColumn
