import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import bcrypt from 'bcryptjs'
import cors from 'cors'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

const port = process.env.PORT
const uri = process.env.DB_URI


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = mongoose.model('User', userSchema)

const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    date: Date
})

const Blog = mongoose.model('Blog', blogSchema)

app.post('/api/register', (req, res) => {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    User.find({ email: req.body.email }).then(user => {
        if(user[0] != undefined){
            res.json({note:"email is already in use"})
            mongoose.connection.close()
        }
        else{
            bcrypt.genSalt(10, function(err, salt) {
                bcrypt.hash(req.body.password, salt, function(err, hash) {
                    const user = new User({
                        name: req.body.name,
                        email: req.body.email,
                        password: hash
                    })
                    user.save().then(result => {
                        res.json({note:"saved"})
                        mongoose.connection.close()
                    })
                })
            })
        }
    })
})

app.post('/api/login', (req, res) => {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    User.find({ email: req.body.email }).then(user => {
        if(user){
            bcrypt.compare(req.body.password, user[0].password, function(err, result) {
                if(result === true){
                    res.json({ output:"match" })
                    mongoose.connection.close()
                }
                else{
                    res.json({ output:"notmatch" })
                    mongoose.connection.close()
                }
            })
        }
        else{
            res.json({ output:"notmatch" })
            mongoose.connection.close()
        }
    })
})

app.post('/api/create', (req, res) => {
    console.log(req.body)
})