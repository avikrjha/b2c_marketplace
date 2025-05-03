const express = require("express");
const Router = express.Router();
const productController = require("../controller/product");

// Featured Categories
Router.get("/featured-categories", productController.featuredCategories);

// Trending Products
Router.get("/trending-products", productController.trendingProducts);

// Best-selling Products
Router.get("/best-selling-products", productController.bestSellingProducts);

// Banners
Router.get("/banners", productController.Banners);

module.exports = Router;
