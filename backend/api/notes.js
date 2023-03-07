import express from 'express'
import {noteCreate, propertyCreate, notesGet} from '../db/notes.js'

export const notes = express.Router();

notes.post('/', async function(req, res) {
  await noteCreate(req.body)
  res.status(201)
  res.send('succeed')
})

notes.get('/', async function(req, res) {
  const notes = await notesGet(req.query.board)
  res.status(200)
  res.json(notes)
})

notes.post('/property', async function(req, res) {
  await propertyCreate(req.body)
  res.status(201)
  res.send('succeed')
})
