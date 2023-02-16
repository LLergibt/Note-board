import express from 'express';
import sequelize from './models/dbConnect.js'

const app = express()


app.get('/', (req, res) => {
	res.send("<h1>OK</h1>")
})

app.listen(8000, async () => {
  console.log('server is up')
  console.log(sequelize.models.User)
})

export default app
