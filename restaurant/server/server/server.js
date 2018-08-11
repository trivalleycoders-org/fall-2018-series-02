import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import { greenf, redf, yellow } from '../logger'
import menu from '../routes/menu-route'
import 'babel-polyfill'

const app = express()
const port = process.env.PORT

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load()
}

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use('/', menu)
app.get('/', (req, res) => {
  redf('Invalid endpoint!')
  res.send('Invalid endpoint!')
})

app.listen(port, () => {
  greenf('server started - ', port)
})

export default app
