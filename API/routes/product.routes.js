const express = require("express");
const { createproducts, Findproducts, deleteproducts, Add_Product, GetAllProducts,  } = require("../controller/product.controller");
const productsRouter = express.Router();


productsRouter.post("/createproducts", createproducts)
productsRouter.post("/Findproducts", Findproducts)
productsRouter.post("/deleteproducts", deleteproducts) 
productsRouter.post("/Add_Product", Add_Product)
productsRouter.get("/GetAllPorducts", GetAllProducts)

module.exports = productsRouter;
