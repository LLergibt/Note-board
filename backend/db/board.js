import sequelize from '../models/dbConnect.js';
import {Boards} from '../models/board.js'

export const boardCreate = async (body) => {
    const board = await Boards.create(body)
    return board
}
export const getProperties = async (boardId) => {
  const [data, metadata] = await sequelize.query(`select * from property_title where board_id=${boardId}`)
  return data
}

