import express from 'express'
import {getGroupByProperty, setGroupByProperty} from '../db/sorts.js'

export const sorts = express.Router();

sorts.get('/', async (req, res) => {
  const property = await getGroupByProperty(req.query.user_id, req.query.board_id)
  res.json(property)

})
sorts.post('/', async (req, res) => {
  const property = await setGroupByProperty(req.body)
  res.json(property)
})
