'use client'

import Box from '@mui/material/Box'
import BoxColumn from './BoxColumn'
import { HEADER_HEIGHT, BOARD_BAR_HEIGHT } from '@/app/utils/constants'
import Button from '@mui/material/Button'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  DropAnimation,
  defaultDropAnimationSideEffects,
  UniqueIdentifier,
  closestCorners,
  Active,
  Over,
  CollisionDetection,
  pointerWithin,
  rectIntersection,
  getFirstCollision,
  MeasuringStrategy
} from '@dnd-kit/core'
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates
} from '@dnd-kit/sortable'
import { useCallback, useRef, useState } from 'react'
import Card from './Card'
import { cloneDeep } from 'lodash'

interface BoxColumnListType {
  columns: Column[]
}

interface DragItermType {
  COLUMN: 'ACTIVE_DRAG_ITEM_TYPE_COLUMN'
  CARD: 'ACTIVE_DRAG_ITEM_TYPE_CARD'
}

const ACTIVE_DRAG_ITEM_TYPE: DragItermType = {
  COLUMN: 'ACTIVE_DRAG_ITEM_TYPE_COLUMN',
  CARD: 'ACTIVE_DRAG_ITEM_TYPE_CARD'
}

function BoxColumnList({ columns }: BoxColumnListType) {
  const [orderedColumns, setOrderedColumns] = useState<Column[]>(columns)
  const [dndData, setDndData] = useState<any>({})
  const [activeDragType, setActiveDragType] = useState<
    'ACTIVE_DRAG_ITEM_TYPE_COLUMN' | 'ACTIVE_DRAG_ITEM_TYPE_CARD' | ''
  >('')
  const [activeColumnOld, setActiveColumnOld] = useState<Column | undefined>(
    undefined
  )
  const [activeDragId, setActiveDragId] = useState<UniqueIdentifier | null>(
    null
  )

  const lastOverId = useRef<UniqueIdentifier | null>(null)

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

  const findColumnByCardId = (cardId: UniqueIdentifier) => {
    return orderedColumns.find(
      (a) => a.cards.map((b) => b._id)?.includes(cardId.toString())
    )
  }

  const moveCardBetweenDifferentColumns = (
    active: Active,
    over: Over,
    overColumn: Column,
    activeColumn: Column
  ) => {
    setOrderedColumns((prev) => {
      const overCardIndex = overColumn.cards.findIndex((c) => c._id === over.id)

      let newCardIndex: number = NaN

      const isBelowOverItem =
        active.rect.current.translated &&
        active.rect.current.translated.top > over.rect.top + over.rect.height

      const modifier = isBelowOverItem ? 1 : 0

      newCardIndex =
        overCardIndex >= 0
          ? overCardIndex + modifier
          : overColumn.cards.length + 1

      const nextColumns = cloneDeep(prev)
      const nextActiveColumn = nextColumns.find(
        (c) => c._id === activeColumn._id
      )
      const nextOverColumn = nextColumns.find((c) => c._id === overColumn._id)

      if (nextActiveColumn) {
        nextActiveColumn.cards = nextActiveColumn.cards.filter(
          (c) => c._id !== active.id
        )
        nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map((c) => c._id)
      }

      if (nextOverColumn) {
        nextOverColumn.cards = nextOverColumn.cards.filter(
          (c) => c._id !== active.id
        )
        nextOverColumn.cards = nextOverColumn.cards.toSpliced(newCardIndex, 0, {
          ...active.data.current,
          columnId: nextOverColumn._id
        } as Card)
        nextOverColumn.cardOrderIds = nextOverColumn.cards.map((c) => c._id)
      }

      return nextColumns
    })
  }

  const handleDragStart = (event: DragEndEvent) => {
    const { active } = event
    setDndData(active.data.current)
    setActiveDragId(active.id)
    setActiveDragType(
      active.data.current?.columnId
        ? ACTIVE_DRAG_ITEM_TYPE.CARD
        : ACTIVE_DRAG_ITEM_TYPE.COLUMN
    )
    if (active.data.current?.columnId) {
      setActiveColumnOld(findColumnByCardId(active.id))
    }
  }

  const handleDragOver = (event: DragEndEvent) => {
    const { active, over } = event

    if (ACTIVE_DRAG_ITEM_TYPE.COLUMN === activeDragType || !over) return

    const activeColumn = findColumnByCardId(active.id)
    const overColumn = findColumnByCardId(over.id)
      ? findColumnByCardId(over.id)
      : orderedColumns.find((c) => c._id === over.id)

    if (!activeColumn || !overColumn) return

    if (activeColumn._id !== overColumn._id) {
      moveCardBetweenDifferentColumns(active, over, overColumn, activeColumn)
    }
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (active.id === over?.id || !over?.id) return

    if (activeDragType === ACTIVE_DRAG_ITEM_TYPE.CARD) {
      const activeColumn = findColumnByCardId(active.id)
      const overColumn = findColumnByCardId(over.id)
        ? findColumnByCardId(over.id)
        : orderedColumns.find((c) => c._id === over.id)

      if (!activeColumn || !overColumn) return

      if (activeColumnOld?._id !== overColumn._id) {
        moveCardBetweenDifferentColumns(active, over, overColumn, activeColumn)
      } else {
        const oldIndex = activeColumnOld.cards.findIndex(
          (c) => c._id === active.id
        )
        const newIndex = activeColumnOld.cards.findIndex(
          (c) => c._id === over?.id
        )

        const dndOrderedCards = arrayMove(
          activeColumnOld.cards,
          oldIndex,
          newIndex
        )

        setOrderedColumns((prev) => {
          const nextColumns = cloneDeep(prev)

          const targetColumn = nextColumns.find((c) => c._id === overColumn._id)
          if (targetColumn) targetColumn.cards = dndOrderedCards
          if (targetColumn)
            targetColumn.cardOrderIds = dndOrderedCards.map((c) => c._id)
          return nextColumns
        })
      }
    }

    if (activeDragType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) {
      const oldIndex = orderedColumns.findIndex((c) => c._id === activeDragId)
      const newIndex = orderedColumns.findIndex((c) => c._id === over?.id)

      const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex)
      setOrderedColumns(dndOrderedColumns)
      //  call api save database
      // const columnOrderIds = dndOrderedColumns.map((c) => c._id)
    }

    setDndData({})
    setActiveDragId(null)
    setActiveDragType('')
    setActiveColumnOld(undefined)
  }

  const dropAnimation: DropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: '0.5'
        }
      }
    })
  }

  const collisionDetectionStrategy: CollisionDetection = useCallback(
    (args) => {
      if (activeDragType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) {
        return closestCorners({ ...args })
      }

      const pointerIntersections = pointerWithin(args)
      const intersections =
        pointerIntersections.length > 0
          ? // If there are droppables intersecting with the pointer, return those
            pointerIntersections
          : rectIntersection(args)

      const overId = getFirstCollision(intersections, 'id')

      if (overId) {
        lastOverId.current = overId
        return [{ id: overId }]
      }
      return lastOverId.current ? [{ id: lastOverId.current }] : []
    },
    [activeDragType]
  )

  return (
    <DndContext
      measuring={{
        droppable: {
          strategy: MeasuringStrategy.Always
        }
      }}
      sensors={sensors}
      collisionDetection={collisionDetectionStrategy}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
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
      <DragOverlay dropAnimation={dropAnimation}>
        {(activeDragType === ACTIVE_DRAG_ITEM_TYPE.COLUMN && (
          <BoxColumn column={dndData} />
        )) ||
          (activeDragType === ACTIVE_DRAG_ITEM_TYPE.CARD && (
            <Card card={dndData} />
          )) ||
          null}
      </DragOverlay>
    </DndContext>
  )
}

export default BoxColumnList
