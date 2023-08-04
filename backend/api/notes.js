import express from 'express'
import {noteCreate, propertyCreate, notesGet, getProperty, propertiesGet, getPropertiesNote,  deleteSelectedChoice, titleChange, propertyNoteCreate, chooseCreate, chooseDelete, selectChoice,  choosePropertyCreate, propertyTypeChange, propertyTitleChange, propertyDataChange,  deleteProperty, choicesGet, selectedChoicesGet} from '../db/notes.js'

export const notes = express.Router();

notes.post('/', async function(req, res) {
  const note = await noteCreate(req.body)
  res.status(201)
  res.json(note)
})

notes.post('/property-note', async function(req, res) {
  propertyNoteCreate(req.body)
  res.status(201)
  res.send('succeed')
})

notes.delete('/property', async function(req, res) {
  deleteProperty(req.query.id)
  res.status(202)
  res.send('succeed')
})
notes.post('/change/title', async function(req, res) {
  titleChange(req.body)
  res.status(201)
  res.send('succeed')
})
notes.post('/change/property/title', async function(req, res) {
  propertyTitleChange(req.body)
  res.status(201)
  res.send('succeed')

})
notes.delete('/choose', async function(req, res) {
  await chooseDelete(req.query.id)
  res.status(202)
  res.send('succeed')
})
notes.delete('/choose/selected', async function(req, res) {
  await deleteSelectedChoice(req.query.id)
  res.status(202)
  res.send('succeed')
})
notes.get('/date', async function(req, res) {
  const date = getDate(req.query.id, req.query.date_type)
  res.status(200)
  res.json(date)
})
notes.post('/change/property/type', async function(req, res) {
    propertyTypeChange(req.body)
    res.status(201)
    res.send('succeed')
})
notes.post('/change/property/type/choose', async function(req, res) {
  const choice = await chooseCreate(req.body)
  res.json(choice)
  res.status(201)
})
notes.post('/change/property/type/choose/select', async function(req, res) {
    await selectChoice(req.body)
    const choice = await selectedChoicesGet(req.body.property_note_id)
    res.json(choice)
    res.status(201)
})
notes.post('/change/property/type/choose/make-select', async function(req, res) {
    await choosePropertyCreate(req.body)
    const choice = await selectedChoicesGet(req.body.property_note_id)
    console.log(choice)
    res.json(choice)
    res.status(201)
})

notes.get('/property-note', async function(req, res) {
  const property = await getProperty(req.query.note_id, req.query.property_id)
  res.status(200)
  res.json(property)
})

notes.post('/change/property/data', async function(req, res) {
  propertyDataChange(req.body)
  res.status(201)
  res.send('succeed')

})

notes.get('/', async function(req, res) {
  const notes = await notesGet(req.query.board)
  res.json(notes)
  res.status(200)
})
notes.get('/properties', async function(req, res) {
  const properties = await propertiesGet(req.query.board)
  res.json(properties)
  res.status(200)
})
notes.get('/properties_of_note', async function(req, res) {
  const properties = await getPropertiesNote(req.query.note_id)
  res.json(properties)
  res.status(200)
})

notes.post('/property', async function(req, res) {
  const property = await propertyCreate(req.body)
  res.json(property)
  res.status(201)
})
notes.get('/property/choices/selected', async function(req, res) {
  const choices = await selectedChoicesGet(req.query.property_note_id)
  res.status(200)
  res.json(choices)
})
notes.get('/property/choices', async function(req, res) {
  const choices = await choicesGet(req.query.property_id)
  res.status(200)
  res.json(choices)
})
