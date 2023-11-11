type Card = {
  _id: string
  boardId: string
  columnId: string
  title: string
  description: string | null
  cover: string | null
  memberIds: string[]
  comments: string[]
  attachments: string[]
}

type Column = {
  _id: string
  boardId: stirng
  title: string
  cardOrderIds: string[]
  cards: Card[]
}

type Board = {
  _id: string
  title: string
  description: string
  type: 'public' | 'private'
  ownerIds: string[]
  memberIds: string[]
  columnOrderIds: string[]
  columns: Column[]
}
