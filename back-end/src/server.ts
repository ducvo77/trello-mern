import express, { Request, Response, Express } from 'express'
import cors from 'cors'
import exitHook from 'async-exit-hook'

import env from './config/environment'
import { CONNECT_DB, CLOSE_DB } from './config/mongodb'
import { APIs_V1 } from './routes/v1'
import { errorHandlingMiddleware } from './middlewares/errorMiddlewareHandlinhg'
import { corsOptions } from './config/cors'

const START_SERVER = () => {
  const app: Express = express()
  const port: number = env.PORT
  const hostname: string = env.HOST_NAME

  app.use(cors(corsOptions))

  app.use(express.json())

  app.use('/v1', APIs_V1)

  // Middleware handle error gather
  app.use(errorHandlingMiddleware)

  app.get('/', (req: Request, res: Response) => {
    res.send('SERVER ON!')
  })

  app.listen(port, hostname, () => {
    console.log(`Running server at http://${port + ':' + hostname}/`)
  })

  exitHook(() => {
    console.log('close server')
    CLOSE_DB()
  })
}

CONNECT_DB()
  .then(() => console.log('Connect database successfully!'))
  .then(() => START_SERVER())
  .catch((error) => {
    console.error(error)
  })
