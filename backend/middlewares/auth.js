import {redisClient} from '../models/dbConnect.js'

export const verifyCode = async (req, res, next) => {
  const code = await redisClient.get(req.body.email)
  if (req.body.code == code) {
    next()
  }
  else {
    res.status(401)
    res.send('uncorrect code')
  }
}
