import express from 'express'
import {boardCreate} from '../db/board.js'

export const board = express.Router();

board.post('/', async (req, res) => {
  await boardCreate(req.body)
  res.status(201)
  res.send('succeed')

})
