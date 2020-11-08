const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');
const { Post } = require('./models/posts')
const User = require('./models/user')



const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

mongoose.connect('mongodb+srv://m0moooZ:momoftw1!@react-blog.pf36a.mongodb.net/insta?retryWrites=true&w=majority',
    {
        useNewUrlParser: true, useUnifiedTopology: true,
        useCreateIndex: true, useFindAndModify: false
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));



app.post('/posts', (req, res) => {
    console.log(req.body)
    let post = new Post(req.body)
    post.save((err, post) => {
        if (err) res.status(404).json({ success: false })
        res.status(201).json({ success: true, post })
    })

})

app.get('/posts', (req, res) => {
    Post.find().sort({ _id: -1 })
        .exec((err, posts) => {
            if (err) res.status(404).json({ success: false })
            res.status(200).json(posts)
        })

})

app.post('/singup', (req, res) => {
    console.log(req.body)
    let user = new User(req.body)
    user.save((err, user) => {
        if (err) res.status(404).json({ success: false })
        res.status(201).json({ success: true, userId: user._id })
    })
})

app.post('/login', async (req, res) => {
    try {
        console.log(req.body)
        let user = await User.findOne({ name:req.body.name })
        if(!user) return res.status(404).json({ success: false})

        if(req.body.password !== user.password) return res.status(404).json({ success: false})

        res.status(201).json({ success:true,
        user })

    } catch (err) {
        res.status(404).json({
            success: false,
            err
        })
    }

})



app.listen(5000, () => {
    console.log('running')
})