import express from 'express'
import {createUser, login, verify} from '../db/auth.js'


export const auth = express.Router();

auth.post('/', async function(req, res) {
  console.log(req.body)
  const user = await createUser(req.body)
  res.status(201)
  res.json(req.body)
})

auth.post('/login', async function(req, res) {
  const token = await login(req.body)
  res.send('email sent')
})

auth.get('/verify', async function(req, res) {
  const token = req.query.token
  if (token == null) return res.sendStatus(401)
  try {
    const user = await verify(token)
    res.json({token: token, userId: user.id})

  }
  catch (error) {
    console.log(error)
    res.send('gd')
  }


})
