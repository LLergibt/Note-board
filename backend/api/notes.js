import express from 'express'
import {noteCreate, propertyCreate, notesGet, titleChange, propertyNoteCreate, propertyTitleChange, propertyDataChange,  deleteProperty} from '../db/notes.js'

export const notes = express.Router();

notes.post('/', async function(req, res) {
  const note = await noteCreate(req.body)
  res.status(201)
  res.json(note)
})

notes.post('/property-note', async function(req, res) {
  await propertyNoteCreate(req.body)
  res.status(201)
  res.send('succeed')
})

notes.delete('/property', async function(req, res) {
  await deleteProperty(req.query.id)
  res.status(202)
  res.send('succeed')
})
notes.post('/change/title', async function(req, res) {
  await titleChange(req.body)
  res.status(201)
  res.send('succeed')
})
notes.post('/change/property/title', async function(req, res) {
  await propertyTitleChange(req.body)
  res.status(201)
  res.send('succeed')

})

notes.post('/change/property/data', async function(req, res) {
  await propertyDataChange(req.body)
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
