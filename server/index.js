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
    name: String,
    email: String,
    title: String,
    content: String,
    dtstr: String,
    dtint: Number
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
    const dtint = parseInt(Date.parse(req.body.date))
    const dtstr = req.body.dtstr
    
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    User.find({ email: req.body.email }).then(user => {
        const blog = new Blog({
            name: user[0].name,
            email: req.body.email,
            title: req.body.title,
            content: req.body.content,
            dtstr: dtstr,
            dtint: dtint
        })

        blog.save().then(result => {
            res.json({output: "saved"})
            mongoose.connection.close()
        })
    })
})

app.get('/api/home', (req, res) => {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

    Blog.find({}).sort({ dtint:-1 }).then(blogs => {
        res.json({blogs: blogs})
        mongoose.connection.close()
    })
})

app.post("/api/blog", (req, res) => {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    Blog.find({ dtint:req.body.id }).then(blogs => {
        res.json({blog: blogs[0]})
    })
})