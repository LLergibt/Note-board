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
export const propertyTitleChange = async (body) => await sequelize.query(`UPDATE property SET title='${body.title}' WHERE id=${body.property_id}`)

export const propertyDataChange = async (body) => await sequelize.query(`update property_note set data='${body.data}' where id=${body.id}`)

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

  const [notesRaw, metadata] = await sequelize.query(`SELECT id, title FROM note WHERE board_id = ${boardId}`)
  return notesRaw
}
export const getPropertiesNote = async (noteId) => {
  const [notesRaw, metadata] = await sequelize.query(`select pn.id, pn.data , p.title, note_id from property_note pn left join property p on p.id = pn.property_id where note_id=${noteId}`)
  return notesRaw

}
export const propertiesGet = async (boardId) => {

  const [properties, metadata] = await sequelize.query(`SELECT pn.id, pn.data, p.title, note_id, pn.property_id FROM property_note pn LEFT JOIN property p ON p.id = pn.property_id`)
  return properties
}
