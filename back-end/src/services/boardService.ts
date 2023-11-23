import { boardModel } from '~/models/boardModel'
import { slugify } from '~/utils/formatters'

const createNew = async (reqBody: BoardTypes) => {
  try {
    const newBoard = { ...reqBody, slug: slugify(reqBody.title) }

    const createdBoard = await boardModel.createNew(newBoard)
    const getNewBoard = await boardModel.findOneById(createdBoard.insertedId.toString())

    return getNewBoard
  } catch (error: any) {
    throw new Error(error)
  }
}

export const boardService = {
  createNew
}
