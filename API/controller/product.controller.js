

const PRODUCT_MODEL = require("../models/product.model")

const createproducts = async (req, res) => {
    const { productsName, email, phone, password } = req.body
    try {
        const products = await PRODUCT_MODEL.create({
            productsName: productsName,
            email: email,
            password: password,
            phone: phone,
        })
        res.status(200).json({
            success: true,
            massage: "products created",
            data: products,
        })
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.name,
            massage: error.massage
        })

    }
}

const Findproducts = async (req, res) => {
    const { productsName } = req.body
    try {
        const products = await PRODUCT_MODEL.find({ productsName })
        res.status(200).json({
            success: true,
            massage: "user finded",
            data: products,
        })
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.name,
            massage: error.massage
        })
    }
}

const deleteproducts = async (req, res) => {
    const { phone } = req.body
    try {
        const products = await PRODUCT_MODEL.deleteOne({
            phone: phone
        })

        res.status(200).json({
            success: true,
            massage: "product deleted",
            data: products,
        })
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.name,
            massage: error.massage
        })
    }
}
 



module.exports = {
    createproducts,
    Findproducts,
    deleteproducts
}