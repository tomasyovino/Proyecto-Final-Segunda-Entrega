import MongoDbContainer from "../../containers/MongoDbContainer.js";
import { CartModel } from "../../models/Carts.js";

class CartsDAOMongo extends MongoDbContainer {
    constructor(){
        super(CartModel);
    }

    async save() {
        try {
            const newCart = await CartModel();
            const savedProduct = await newCart.save();
            return savedProduct;
        } catch (err) {
            console.log(`There has been an error: ${err}`);
        }
    }

    async addProduct(id, prod) {
        try {
            let updatedCart = await CartModel.findByIdAndUpdate(id, { $push: { "products": prod } });
            return updatedCart;
        } catch (err) {
            console.log(`There has been an error: ${err}`);
        }
    }

    async listProducts(id) {
        try {
            let cartProducts = await CartModel.findById(id, { "products": 1, "_id": 0 }).exec();
            return cartProducts;
        } catch (err) {
            console.log(`There has been an error: ${err}`);
        }

    }

    async deleteProduct(id, id_prod) {
        try {
        let cart = await CartModel.updateOne({ "_id": id }, { $pull: {"products": { "id": id_prod }} } )
        return cart;
        } catch (err) {
            console.log(`There has been an error: ${err}`);
        }
    }
}

export default CartsDAOMongo;