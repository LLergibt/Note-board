import { Types } from './board.js'
 const createTypes = async () => {
  const text = await Types.create({title: "text"})
  const number = await Types.create({title: "number"})
  const phoneNumber = await Types.create({title: "phoneNumber"})
  const email = await Types.create({title: "email"})
  const url = await Types.create({title: "url"})
  const choice = await Types.create({title: "choice"})
  const choices = await Types.create({title: "choices"})
  const date = await Types.create({title: "date"})
  const person = await Types.create({title: "person"})
  const multiPerson = await Types.create({title: "multi_person"})
  const flag = await Types.create({title: "flag"})
  const createdAt = await Types.create({title: "created_at"})
  const createdBy = await Types.create({title: "created_by"})
  const updatedAt = await Types.create({title: "updated_at"})
  const updatedBy = await Types.create({title: "updated_by"})
}
export default createTypes
