const Joi = require("joi");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : { 
        type : String,
        required : true,
        minlength : 5,
        maxlength : 50
    },
    isAdmin : {
        type : Boolean,
        default : false,
    },
    email : {
        type : String,
        required : true,
        minlength : 5,
        maxlength : 255,
        unique : true
    },
    password : {
        type : String,
        required : true,
        minlength : 5,
        maxlength : 1024,
    },
    phonenumber : {
        type : String,
        required : true,
        minlength : 8,
        maxlength : 15
    },
    city : {
        type : String,
        required : true,
        minlength : 5,
        maxlength : 25,
    },
    address: {
        type : String,
        required : true,
        minlength : 5,
        maxlength : 255,
    }

});

const User = mongoose.model("User", userSchema);

function validateUser(user){
    const schema = {
        name : Joi.string().min(5).max(50).required(),
        email : Joi.string().min(5).max(255).required().email(),
        isAdmin : Joi.bool(),
        password : Joi.string().min(5).max(1000).required(),
        phonenumber : Joi.string().min(8).max(15).required(),
        city : Joi.string().min(5).max(25).required(),
        address : Joi.string().min(5).max(255).required(),
    };

    return Joi.validate(user,schema);
}

exports.User = User;
exports.validate = validateUser;