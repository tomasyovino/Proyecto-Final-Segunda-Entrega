import express from "express";
import productsRouter from "./products.js";
import cartRouter from "./carts.js";

let administrador = false;
const router = express.Router();

router.use("/productos", productsRouter);
router.use("/carrito", cartRouter);

const invalidRoute = (req) => {
    const url = req.originalUrl;
    const method = req.method;
    return { error: -2, description: `Ruta ${url} inexistente. Método ${method} no implementado.` };
};

router.get("*", (req, res) => {
    res.send(invalidRoute(req));
})
.post("*", (req, res) => {
    res.send(invalidRoute(req));
})
.delete("*", (req, res) => {
    res.send(invalidRoute(req));
})
.put("*", (req, res) => {
    res.send(invalidRoute(req));
});

export default router;