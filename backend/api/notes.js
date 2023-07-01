import express from 'express'
import {noteCreate, propertyCreate, notesGet, getProperty, propertiesGet, getPropertiesNote,  titleChange, propertyNoteCreate, chooseCreate, choosePropertyCreate, propertyTypeChange, propertyTitleChange, propertyDataChange,  deleteProperty} from '../db/notes.js'

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
notes.post('/change/property/type', async function(req, res) {
    await propertyTypeChange(req.body)
    res.status(201)
    res.send('succeed')
})
notes.post('/change/property/type/choose', async function(req, res) {
    await chooseCreate(req.body)
    res.status(201)
    res.send('succeed')
})
notes.post('/change/property/type/choose-property', async function(req, res) {
    await choosePropertyCreate(req.body)
    res.status(201)
    res.send('succeed')
})

notes.get('/property-note', async function(req, res) {
  const property = await getProperty(req.query.note_id, req.query.property_id)
  res.status(200)
  res.json(property)
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
notes.get('/properties', async function(req, res) {
  const properties = await propertiesGet(req.query.board)
  res.status(200)
  res.json(properties)
})
notes.get('/properties_of_note', async function(req, res) {
  const properties = await getPropertiesNote(req.query.note_id)
  res.status(200)
  res.json(properties)
})

notes.post('/property', async function(req, res) {
  const property = await propertyCreate(req.body)
  res.status(201)
  res.json(property)
})
