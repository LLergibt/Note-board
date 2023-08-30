import express from 'express'
import {boardCreate, getProperties, getPropertiesChoices, getTypes} from '../db/board.js'

export const board = express.Router();

board.post('/', async (req, res) => {
  await boardCreate(req.body)
  res.status(201)
  res.send('succeed')

})
board.get('/properties/', async (req, res) => {
  const properties = await getProperties(req.query.board_id)
  res.status(200)
  res.json(properties)
})
board.get('/properties/choices', async (req, res) => {
  const properties = await getPropertiesChoices(req.query.board_id)
  res.status(200)
  res.json(properties)
})
board.get('/types/', async (req, res) => {
  const types = await getTypes()
  res.status(200)
  res.json(types)
})
