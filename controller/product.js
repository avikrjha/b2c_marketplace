const schema = require("../utils/schima");
const mongoose = require("mongoose");

module.exports = {
  // fetch Featured Categories
  async featuredCategories(req, res) {
    try {
      const categories = await schema.Category.find({ isFeatured: true });

      if (!categories.length) {
        return res.status(404).json({
          msg: "No featured categories found.",
          data: [],
        });
      }

      res.json({
        msg: "Featured Categories fetched successfully.",
        data: categories,
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ msg: "Error fetching data.", error: error.message });
    }
  },

  // Trending Products

  async trendingProducts(req, res) {
    try {
      const products = await schema.Product.find({ isTrending: true }).limit(10);

      if (!products.length) {
        return res.status(404).json({
          msg: "No Products found.",
          data: [],
        });
      }

      res.json({
        msg: "Trending Products fetched successfully.",
        data: products,
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ msg: "Error fetching data.", error: error.message });
    }
  },

  // Best-selling Products

  async bestSellingProducts(req, res) {
    try {
      const products = await schema.Product.find().sort({ totalSold: -1 }).limit(10);

      if (!products.length) {
        return res.status(404).json({
          msg: "No Products  found.",
          data: [],
        });
      }

      res.json({
        msg: "Best-selling Products fetched successfully.",
        data: products,
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ msg: "Error fetching data.", error: error.message });
    }
  },

  // Banners

  async Banners(req, res) {
    try {
      const banners = await schema.Banner.find();

      if (!banners.length) {
        return res.status(404).json({
          msg: "No banners found.",
          data: [],
        });
      }

      res.json({
        msg: "Banners fetched successfully.",
        data: banners,
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ msg: "Error fetching data.", error: error.message });
    }
  },
};
