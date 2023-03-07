import express from 'express';
import createTables from './models/modelsCreate.js'
import {notes} from './api/notes.js'
import {auth} from './api/auth.js'
import {board} from './api/board.js'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()

const app = express()
app.use(cors({
    origin: 'http://localhost:3000'
}));

await createTables()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/notes', notes)
app.use('/auth', auth)
app.use('/board', board)

app.get('/', (req, res) => {
	res.send("<h1>OK</h1>")
})

app.listen(8000, async () => {
  console.log('server is up')
})

export default app
