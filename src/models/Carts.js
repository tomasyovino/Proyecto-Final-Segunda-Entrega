import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    products: {type: Array, required: true, max: 100},
});

export const CartModel = mongoose.model("carts", cartSchema);