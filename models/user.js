const mongoose = require('mongoose')



const userSchema = mongoose.Schema({
    name: {
        type:String,
        maxlength:50,
        minlength : 5,
        required: true
    },
    email: {
        type:String,
        trim:true,
        unique: 1,
        minlength : 5,
        required: true
    },
    password: {
        type: String,
        minlength: 5,
        required: true
    }
}, {timestamps: true})


const User = mongoose.model('User', userSchema);

module.exports =  User 