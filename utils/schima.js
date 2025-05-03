const mongoose = require('mongoose');

// categorySchema
const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: String,
  isFeatured: { type: Boolean, default: false }
});

// product Schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: String,
  price: Number,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  isTrending: { type: Boolean, default: false },
  totalSold: { type: Number, default: 0 } // for best-selling
});

// Banner Schema
const bannerSchema = new mongoose.Schema({
  image: String,
  link: String,
  position: String // e.g., top, middle, sidebar
});

// Export models
module.exports = {
  Banner: mongoose.model('Banner', bannerSchema),
  Product: mongoose.model('Product', productSchema),
  Category: mongoose.model("Category", categorySchema)
};
