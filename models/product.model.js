const mongoose = require("mongoose");

const { Schema } = mongoose;

const ProductSchema = new Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    price:{
      type:Number,
    },
    status: {
      type: String,
      enum: ["in-cart", "pending", "delivered"],
    },
    shipingDate: {
      type: Date,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const productSchema = mongoose.model("Product", ProductSchema);
module.exports = productSchema;
