import express from 'express'
import {createUser, login, verify, verifyEmail} from '../db/auth.js'
import {verifyCode} from '../middlewares/auth.js'
import jwt from 'jsonwebtoken'


export const auth = express.Router();

auth.post('/', verifyCode, async function(req, res) {
  const user = await createUser(req.body)
  res.status(201)
  res.json(req.body)
})
auth.post('/verify-email', async function(req, res) {
  const token = jwt.sign(req.body, process.env.JWT_SECRET, {
    expiresIn: "1h",
  })
  await verifyEmail(req.body.email, token)
  res.send("email sent")

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
