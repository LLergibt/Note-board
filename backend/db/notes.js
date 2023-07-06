import sequelize from '../models/dbConnect.js'
import {Note, PropertyTitle, PropertyNote, Choose, ChoosePropertyNote} from '../models/notes.js'

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

export const chooseCreate = async (body) => {
  const choose = await Choose.create({title: body.title, property_id: body.property_id})
  return choose
}
export const chooseDelete = async (chooseId) => {
  await sequelize.query(`DELETE FROM choose_property_note WHERE choose_id=${chooseId}`)
  await sequelize.query(`DELETE FROM choose WHERE id=${chooseId}`)
}
export const selectChoice = async (body) => {
  const choice = await sequelize.query(`UPDATE choose_property_note SET choose_id=${body.choose_id} WHERE property_note_id=${body.property_note_id}`)
  return choice
}

export const choosePropertyCreate = async (body) => {
  ChoosePropertyNote.create({property_note_id: body.property_note_id, choose_id: body.choose_id})
}

export const propertyNoteCreate = async (body) => {
  const propertyNote = await PropertyNote.create(body)
  return propertyNote
}
export const propertyTitleChange = async (body) => await sequelize.query(`UPDATE property SET title='${body.title}' WHERE id=${body.property_id}`)

export const propertyDataChange = async (body) => await sequelize.query(`update property_note set data='${body.data}' where id=${body.id}`)

export const propertyTypeChange = async(body) => await sequelize.query(`UPDATE property SET type_id=${body.type_id} WHERE id=${body.id}`)

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
  const [notesRaw, metadata] = await sequelize.query(`select pn.id, pn.data , p.title, note_id, pn.property_id, types.title as types_title, types.id as types_id, types.category as types_category from property_note pn left join property p on p.id = pn.property_id left join types ON types.id = p.type_id where note_id=${noteId}`)
  return notesRaw

}
export const getProperty = async(noteId, propertyId) => {
  const [property, metadata] = await sequelize.query(`SELECT pn.id, pn.data, pn.note_id, pn.property_id, types.category as types_category FROM property_note pn LEFT JOIN property p ON p.id = pn.property_id left join types ON types.id = p.type_id WHERE note_id=${noteId} and property_id=${propertyId}`)
  return property

}
export const propertiesGet = async (boardId) => {

  const [properties, metadata] = await sequelize.query(`SELECT pn.id, pn.data, p.title, note_id, pn.property_id, types.title as types_title, types.id as types, types.category as types_category FROM property_note pn LEFT JOIN property p ON p.id = pn.property_id left join types ON types.id = p.type_id`)
  return properties
}
export const selectedChoicesGet = async (propertyNoteId) => {
  const [choices, metadata] = await sequelize.query(`SELECT title, choose_id, property_note_id FROM choose_property_note LEFT JOIN choose on choose.id = choose_property_note.choose_id WHERE choose_property_note.property_note_id=${propertyNoteId}`)

  return choices
}
export const choicesGet = async (propertyId) => {
  const [choices, metadata] = await sequelize.query(`select * from choose where property_id=${propertyId}`)
  return choices

}

