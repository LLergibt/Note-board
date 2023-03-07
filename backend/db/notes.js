import sequelize from '../models/dbConnect.js'
import {Note, PropertyTitle} from '../models/notes.js'

export const noteCreate = async (body) => {
  const note = await Note.create(body)
  return note
}
export const propertyCreate = async (body) => {
  const property = await PropertyTitle.create(body)
  return property
}
export const notesGet = async (boardId) => {
  const [notesRaw, metadata] = await sequelize.query(`select title,  ARRAY_AGG(json_build_object('property_data', property_data, 'property_id', property_id)) as properties  from note where board_id = ${boardId}  group by title`)
  return notesRaw
}
