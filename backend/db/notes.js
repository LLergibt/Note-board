import sequelize from '../models/dbConnect.js'
import {Note, PropertyTitle, PropertyNote} from '../models/notes.js'

export const noteCreate = async (body) => {
  const note = await Note.create(body)
  return note
}
export const propertyNoteCreate = async (body) => {
  const propertyNote = await PropertyNote.create(body)
  return propertyNote
}
export const propertyCreate = async (body) => {
  const property = await PropertyTitle.create(body)
  return property
}
export const notesGet = async (boardId) => {
  const [notesRaw, metadata] = await sequelize.query(`SELECT n.id, n.title, ARRAY_AGG(json_build_object('property_title', pt.title, 'property_data', pn.property_data, 'property_id', pn.property_id)) as properties  FROM note n JOIN property_note pn ON n.id = pn.note_id JOIN  property_title pt ON pt.id = pn.property_id WHERE n.board_id = ${boardId} GROUP BY n.id
`)
  return notesRaw
}
