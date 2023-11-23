import { Db, MongoClient, ServerApiVersion } from 'mongodb'
import env from './environment'

let databaseInstance: Db | null = null

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client: MongoClient = new MongoClient(env.MONGNODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

export const CONNECT_DB = async () => {
  try {
    await client.connect()
    databaseInstance = client.db(env.DATABASE_NAME)
  } catch (error) {
    console.log(error)
  }
}

export const CLOSE_DB = async () => {
  await client.close()
}

export const GET_DB = () => {
  if (!databaseInstance) throw 'Must connect to Databse first'
  return databaseInstance
}
