import express from 'express'
import {createUser} from '../db/auth.js'

export const auth = express.Router();

auth.post('/', async function(req, res) {
  console.log(req.body)
  const user = await createUser(req.body)
  res.status(201)
  res.json(req.body)
 
  
})
