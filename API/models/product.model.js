const { Schema, model } = require("mongoose");




const productSchema = new Schema({
    img: {
        type: String,
    },
    name: {
        type: String,
        required: true,
        split: " ",
    },
    price: {
        required: true,
        type: String,
        split: " ",
    },
    Quantity: {
        // required: true,
        type: String,
        split: " ",

    },
    type: {
        type: String,
        split: " ",
    }
})



const PRODUCT_MODEL = model("product", productSchema);
module.exports = PRODUCT_MODEL