const express = require('express')
const app = express()
const router = require('./routes/api')
const connectDb = require('./db/connect')
require('dotenv').config()

const notFound = require('./middleware/notFound')
const errorHandlerMiddleware = require('./middleware/errorHandler')

const port = process.env.PORT || 3000

//express middlewares
app.use(express.static('./public'))
app.use(express.json())

//routes
app.use('/api/v1/tasks', router)

app.use(errorHandlerMiddleware)
app.use(notFound)


//START
const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI)
    app.listen(port, console.log(`Listening to port ${port}...`))
  } catch (error) {
    console.log(error)
  }
}

start()