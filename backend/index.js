import express from 'express';
import createTables from './models/modelsCreate.js'
import {notes} from './api/notes.js'
import {auth} from './api/auth.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

await createTables()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/notes', notes)
app.use('/auth', auth)

app.get('/', (req, res) => {
	res.send("<h1>OK</h1>")
})

app.listen(8000, async () => {
  console.log('server is up')
})

export default app
