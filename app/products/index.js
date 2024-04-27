const express = require("express");
const productsController = require("./controller");

const router = express.Router();

router.post("/products", productsController.createProduct);
router.post("/products/:_id", productsController.updateProduct);
router.delete("/products/:_id", productsController.deleteProduct);
module.exports = router;
