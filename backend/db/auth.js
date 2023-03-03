import {User} from '../models/auth.js'
import sequelize, {redisClient} from '../models/dbConnect.js'
import jwt from 'jsonwebtoken'
import QueryTypes from 'sequelize'
import {sendEmail} from '../utils/mailer.js'

export const createUser = async (body) => {
  const code = await redisClient.get(body.email)
  if (body.code == code) {
    const user = await User.create(body)
    return user
  }
}
export const verifyEmail = async (email, token) => {
    const code = Math.floor(1000 + (9999 - 1000) * Math.random());

    try {
      const emailText = `<p>You requested for email verification, kindly use this ${code} to verify your email address</p>`
        await redisClient.set(email, JSON.stringify(code));
        await sendEmail(email, emailText)
      
    }
    catch (error) {
      return error
    }
}

export const login = async (body) => {
  const [userRaw, metadata] = await sequelize.query(`SELECT * FROM users WHERE email = '${body.email}'`)
  const user = userRaw[0]
  console.log(user.id)

  if (user != null) {
      const token = jwt.sign({userId: user.id}, process.env.JWT_SECRET, {
        expiresIn: "1h",
      })
      try {
        const emailText = '<p>You requested for email verification, kindly use this <a href="http://localhost:8000/auth/verify?token=' + token + '">link</a> to verify your email address</p>'
        sendEmail(email, emailText)
      }
      catch (error) {
        console.log(error)
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


