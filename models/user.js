const mongoose = require('mongoose')



const userSchema = mongoose.Schema({
    name: {
        type:String,
        maxlength:50,
        minglength : 5
    },
    email: {
        type:String,
        trim:true,
        unique: 1,
        minglength : 5
    },
    password: {
        type: String,
        minglength: 5
    }
}, {timestamps: true})


const User = mongoose.model('User', userSchema);

module.exports =  User 