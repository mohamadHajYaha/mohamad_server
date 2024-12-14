
const productsRouter = require("./product.routes")
const userRouter = require("./user.routes")

const Routes =[
    userRouter,
    productsRouter
]
module.exports = Routes