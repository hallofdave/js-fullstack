const mongoose = require("mongoose");

const Product = require("./models/products");

mongoose
   .connect(
      "mongodb+srv://halljdave:NAsA3Ufqc8JFf8FG@cluster0.nluxlcs.mongodb.net/products_test?retryWrites=true&w=majority"
   )
   .then(() => {
      console.log("Connected to the database");
   })
   .catch(() => {
      console.log("Connection failed");
   });

const createProduct = async (req, res, next) => {
   const createProduct = new Product({
      name: req.body.name,
      price: req.body.price,
   });
   const result = await createProduct.save();
   console.log(typeof createdProduct.id);
   res.json(result);
};

const getProducts = async (req, res, next) => {
   const products = await Product.find().exec();
   res.json(products);
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
