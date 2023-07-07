// express app
import express from 'express'

import routes from './routes/routes.js'

const app = express()

app.use(express.json())
app.use(routes)

app.get('/', (req, res) => {
  res.send('hi mom')
})

export default app
