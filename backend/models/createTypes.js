import { Types } from './board.js'
 const createTypes = async () => {
  const text = await Types.create({title: "text", category: "text"})
  const number = await Types.create({title: "number", category: "text"})
  const phoneNumber = await Types.create({title: "phoneNumber", category: "text"})
  const email = await Types.create({title: "email", category: "text"})
  const url = await Types.create({title: "url", category: "text"})

  const date = await Types.create({title: "date", category: "date"})

  const flag = await Types.create({title: "flag", category: "flag"})

  const createdAt = await Types.create({title: "created_at", category: "func"})
  const createdBy = await Types.create({title: "created_by", category: "func"})
  const updatedAt = await Types.create({title: "updated_at", category: "func"})
  const updatedBy = await Types.create({title: "updated_by", category: "func"})

  const choice = await Types.create({title: "choice", category: "choise"})
  const choices = await Types.create({title: "choices", category: "multi-choice"})

  const person = await Types.create({title: "person", category: "person"})
  const multiPerson = await Types.create({title: "multi_person", category: "multi-person"})
}
export default createTypes
