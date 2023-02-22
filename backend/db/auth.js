import {User} from '../models/auth.js'

export const createUser = async (body) => {
  const user = await User.create(body)
  return user
}

