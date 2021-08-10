import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(express.json())

const port = process.env.PORT

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})