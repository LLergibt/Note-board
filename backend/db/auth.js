import {User} from '../models/auth.js'
import sequelize from '../models/dbConnect.js'
import jwt from 'jsonwebtoken'
import QueryTypes from 'sequelize'
import {sendEmail} from '../utils/mailer.js'

export const createUser = async (body) => {
  const user = await User.create(body)
  return user
}

export const login = async (body) => {
  const [userRaw, metadata] = await sequelize.query(`SELECT * FROM users WHERE email = '${body.email}'`)
  const user = userRaw[0]

  if (user != null) {
    try {
      const token = jwt.sign({userId: user.id}, process.env.JWT_SECRET, {
        expiresIn: "1h",
      })
      sendEmail(user.email, token)
    }
    catch (error) {
      return error
    }
  }
}

export const verify = async (token) => {
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
  const [userRaw, metadata] = await sequelize.query(`SELECT * FROM users WHERE id = ${decodedToken.userId}`)
  const user = userRaw[0]
  return user
}


