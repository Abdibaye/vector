import express from 'express'
import { connectToMongo } from './model/index.js'
import uploadRouter from './routes/upload.js'
const app = express()

connectToMongo()

app.get('/', (req, res) => {
  res.send("test server is running")
})

app.use(express.json())

app.use("/upload", uploadRouter)



app.listen(3000)