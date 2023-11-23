import express, { Request, Response, Router } from 'express'
import { StatusCodes } from 'http-status-codes'
import { boardRoute } from './boardRoute'

const router: Router = express.Router()

// Check API v1 status
router.get('/status', (req: Request, res: Response) => {
  res.status(StatusCodes.OK).json({ message: 'API v1 are ready to use!' })
})
// Board APIs_V1
router.use('/boards', boardRoute)

export const APIs_V1 = router
