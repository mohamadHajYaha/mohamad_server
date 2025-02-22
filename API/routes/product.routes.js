const express = require("express");
const { createproducts, Findproducts, deleteproducts, Add_Product,  } = require("../controller/product.controller");
const productsRouter = express.Router();


productsRouter.post("/createproducts", createproducts)
productsRouter.post("/Findproducts", Findproducts)
productsRouter.post("/deleteproducts", deleteproducts) 
productsRouter.post("/Add_Product", Add_Product)

module.exports = productsRouter;
