const express = require("express")
const Routes = express.Router()

const Products = require("./product")

Routes.use("/Products", Products)

module.exports = Routes