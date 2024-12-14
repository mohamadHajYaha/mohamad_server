const express = require("express");
const { createproducts, Findproducts, deleteproducts,  } = require("../controller/product.controller");
const productsRouter = express.Router();


productsRouter.post("/createproducts", createproducts)
productsRouter.post("/Findproducts", Findproducts)
productsRouter.post("/deleteproducts", deleteproducts) 

module.exports = productsRouter;
