'use client'

import Box from '@mui/material/Box'
import BoxColumn from './BoxColumn'
import { HEADER_HEIGHT, BOARD_BAR_HEIGHT } from '@/app/utils/constants'
import Button from '@mui/material/Button'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  MouseSensor,
  TouchSensor
} from '@dnd-kit/core'
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates
} from '@dnd-kit/sortable'
import { useState } from 'react'

interface BoxColumnListType {
  columns: Column[]
}

function BoxColumnList({ columns }: BoxColumnListType) {
  const [orderedColumns, setOrderedColumns] = useState(columns)

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10
      }
    }),
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 10
      }
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5
      }
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  )

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (active.id === over?.id || !over?.id) return

    console.log(event)

    const oldIndex = orderedColumns.findIndex((c) => c._id === active.id)
    const newIndex = orderedColumns.findIndex((c) => c._id === over?.id)

    const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex)

    //  call api save database
    // const columnOrderIds = dndOrderedColumns.map((c) => c._id)

    setOrderedColumns(dndOrderedColumns)
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={orderedColumns.map((column) => column._id)}
        strategy={horizontalListSortingStrategy}
      >
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
          {orderedColumns.map((column) => (
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
      </SortableContext>
    </DndContext>
  )
}

export default BoxColumnList
