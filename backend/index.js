import express from 'express';
import './models/modelsCreate.js'


const app = express()


app.get('/', (req, res) => {
	res.send("<h1>OK</h1>")
})

app.listen(8000, async () => {
  console.log('server is up')
})

export default app
