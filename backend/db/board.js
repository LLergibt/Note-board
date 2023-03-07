import sequelize from '../models/dbConnect.js';
import {Boards} from '../models/board.js'

export const boardCreate = async (body) => {
    const board = await Boards.create(body)
    return board
  
}

