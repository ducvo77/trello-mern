import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { boardService } from '~/services/boardService'

const createNew = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const createdBoard = await boardService.createNew(req.body)

    res.status(StatusCodes.CREATED).json(createdBoard)
    // throw new ApiError(StatusCodes.INSUFFICIENT_SPACE_ON_RESOURCE, 'error custom')
  } catch (error: any) {
    next(error)
  }
}

export const boardController = {
  createNew
}
