import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {type: String, required: true, max: 100},
    price: {type: Number, required: true},
    thumbnail: {type: String, required: true, max: 100},
});

export const ProductModel = mongoose.model("products", productSchema);