// const { Schema, model } = require("mongoose");

const { Schema, model } = require("mongoose");




const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        maxLength: 10,
        minLength: 3,
        split: " ",

    },
    email: {
        type: String,
        required: true,
        unique: true,
        split: " ",
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        minLength: 10,
        maxLength: 10,
        split: " ",

    },
    password: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 25,
        split: " ",

    },
    orderHistory: {
        type: Array,
        required: false,
        default: [],

    },
    dsplayname: {
        type: String,
        required: true,
        unique: true,

    },
    dsplayname: {
        type: String,
        required: true,
        unique: true,

    },
    userName: {
        type: String,
        required: true,
        unique: true,

    }

})


const USER_MODEL = model("User", userSchema);
module.exports = USER_MODEL