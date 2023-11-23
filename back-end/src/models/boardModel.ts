import Joi from 'joi'
import { ObjectId } from 'mongodb'
import { GET_DB } from '~/config/mongodb'
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from '~/utils/validators'

const BOARD_COLLECTION_NAME = 'boards'
const BOARD_COLLECTION_SCHEMA = Joi.object({
  title: Joi.string().required().min(3).max(50).trim().strict(),
  description: Joi.string().required().min(3).max(256).trim().strict(),
  type: Joi.string().valid('public', 'private').required(),
  slug: Joi.string().required().min(3).max(50).trim().strict(),
  colomnOrderIds: Joi.string().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE).default([]),
  createdAt: Joi.date().timestamp('javascript').default(Date.now()),
  updatedAd: Joi.date().timestamp('javascript').default(null),
  _destroy: Joi.boolean().default(false)
})

const validateBeforeCreate = async (data: BoardTypes) => {
  return await BOARD_COLLECTION_SCHEMA.validateAsync(data, { abortEarly: true })
}

const createNew = async (data: BoardTypes) => {
  try {
    console.log(data)

    const validData = await validateBeforeCreate(data)
    console.log(validData)

    return await GET_DB().collection(BOARD_COLLECTION_NAME).insertOne(validData)
  } catch (error: any) {
    throw new Error(error)
  }
}

const findOneById = async (id: any) => {
  return await GET_DB()
    .collection(BOARD_COLLECTION_NAME)
    .findOne({
      _id: new ObjectId(id)
    })
}

export const boardModel = {
  BOARD_COLLECTION_NAME,
  BOARD_COLLECTION_SCHEMA,
  createNew,
  findOneById
}
