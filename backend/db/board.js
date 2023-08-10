import sequelize from '../models/dbConnect.js';
import {Boards} from '../models/board.js'
import {PropertyTitle} from '../models/notes.js'

export const boardCreate = async (body) => {
    const board = await Boards.create(body)
    const propertyStatus = await PropertyTitle.create({board_id: board.id, type_id: 1})
    return board
}
export const getProperties = async (boardId) => {
  const [data, metadata] = await sequelize.query(`select * from property where board_id=${boardId} ORDER BY id`)
  return data
}
export const getTypes = async () => {
  const [types, metadata] = await sequelize.query(`SELECT id, title, category from types`)
  return types
}

