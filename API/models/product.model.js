const { Schema, model } = require("mongoose");




const productSchema = new Schema({
    img:{
        type: String,

    },
    productName:{
        type: String,
      required: true,
      split: " ",
    },
    price:{
    required: true,
    type: Number,
    split: " ",
    },
    quantity:{
        required:true,
        type:String,
        split: " ",
        
    }

})



const PRODUCT_MODEL = model("product", productSchema);
module.exports = PRODUCT_MODEL