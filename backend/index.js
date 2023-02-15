import express from 'express';
import pool from './dbConnect.js'

const app = express()


app.get('/', (req, res) => {
	res.send("<h1>OK</h1>")
})

app.listen(8000, async () => {
  console.log('server is up')
  let jj =  await pool.query('Select * from gg')
  console.log(jj.rows)
})

export default app
