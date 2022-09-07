import express from "express";
import { cartsDAO } from "../config.js";

const cartRouter = express.Router();

cartRouter.get("/", async (req, res) => {
    try {
        let carts = await cartsDAO.listAll();
        res.send(carts);
    } catch (err) {
        console.log(`There has been an error: ${err}`);
    }
});

cartRouter.get("/:id/productos", async (req, res) => {
    try {
        const { id } = req.params;
        let cartProducts = await cartsDAO.listProducts(id) // => Agregar Firebase
        res.send(cartProducts);
    } catch (err) {
        console.log(`There has been an error: ${err}`);
    }
});

cartRouter.post("/", async (req, res) => {
    try {
        let saveCart = await cartsDAO.save();
        res.send(saveCart);
    } catch (err) {
        console.log(`There has been an error: ${err}`);
    }
});

cartRouter.post("/:idCart/productos", async (req, res) => {
    try {
        const { idCart } = req.params;
        const { id, title, price, thumbnail } = req.body;
        const postProductToCart = await cartsDAO.addProduct(idCart, { title, price, thumbnail, id }); // => Agregar Firebase
        res.send(postProductToCart);
    } catch (err) {
        console.log(`There has been an error: ${err}`);
    }

});

cartRouter.delete("/:id", async (req, res) => {
    const { id } = req.params;
    res.send(cartsDAO.delete(id));
});

cartRouter.delete("/:id/productos/:id_prod", async (req, res) => {
    const { id, id_prod } = req.params;
    const deleteProductFromCart = await cartsDAO.deleteProduct(id, id_prod); // => Agregar Firebase
    res.send(deleteProductFromCart);
});

export default cartRouter;