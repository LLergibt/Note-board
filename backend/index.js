import express from 'express';
import createTables from './models/modelsCreate.js'
const app = express()

await createTables()


app.get('/', (req, res) => {
	res.send("<h1>OK</h1>")
})

app.listen(8000, async () => {
  console.log('server is up')
})

export default app
