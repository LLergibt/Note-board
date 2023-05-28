import sequelize from '../models/dbConnect.js'
import {Note, PropertyTitle, PropertyNote} from '../models/notes.js'

export const noteCreate = async (body) => {
  const note = await Note.create(body)
  const [properties, metadata] = await sequelize.query(`SELECT * FROM property WHERE board_id = ${body.board_id}
  `)
  properties.map((property) => {
    PropertyNote.create({note_id: note.id, property_id: property.id, property_data: ''})
  })

  return note
}
export const titleChange = async (body) => await sequelize.query(`UPDATE note SET title='${body.title}' WHERE id=${body.id}`)

export const deleteProperty = (propertyId) => {
   sequelize.query(`DELETE FROM property_note WHERE property_id=${propertyId}`)
   sequelize.query(`DELETE FROM property WHERE id=${propertyId}`)
}

export const propertyNoteCreate = async (body) => {
  const propertyNote = await PropertyNote.create(body)
  return propertyNote
}
export const propertyTitleChange = async (body) => await sequelize.query(`UPDATE property SET title='${body.title}' WHERE id=${body.id}`)

export const propertyDataChange = async (body) => await sequelize.query(`update property_note set property_data='${body.data}'  where property_id=${body.property_id} and note_id=${body.note_id}`)

export const propertyCreate = async (body) => {
  const property = await PropertyTitle.create(body)
  const [notes, metadata] = await sequelize.query(`SELECT * FROM note WHERE board_id = ${body.board_id}
  `)
  notes.map((note) => {
    PropertyNote.create({note_id: note.id, property_id: property.id, property_data: ''})
  })
  return property
}
export const notesGet = async (boardId) => {

  const [notesRaw, metadata] = await sequelize.query(`SELECT n.id, n.title, ARRAY_AGG(json_build_object('title', p.title, 'data', pn.property_data, 'id', pn.property_id)) as properties  FROM note n LEFT JOIN property_note pn ON n.id = pn.note_id LEFT JOIN  property p ON p.id = pn.property_id WHERE n.board_id = ${boardId} GROUP BY n.id
`)
  console.log(notesRaw)
  return notesRaw
}
