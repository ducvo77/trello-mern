import express, { Request, Response, Router } from 'express'
import { StatusCodes } from 'http-status-codes'
import { boardController } from '~/controllers/boardController'
import { boardValidation } from '~/validations/boardValidation'

const router: Router = express.Router()

router
  .route('/')
  .get((req: Request, res: Response) => {
    res.status(StatusCodes.OK).json({ message: 'API get list board' })
  })
  .post(boardValidation.createNew, boardController.createNew)

export const boardRoute = router
