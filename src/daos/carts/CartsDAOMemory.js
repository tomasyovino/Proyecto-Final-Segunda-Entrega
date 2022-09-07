import MemoryContainer from "../../containers/MemoryContainer.js";

class CartsDAOMemory extends MemoryContainer {
    async save(cart = { products: [] }) {
        return super.save(cart)
    }

    async listProducts(id) {
        try {
            const targetCart = await this.list(id);
            const cartListProducts = targetCart.products;
            
            return cartListProducts;    
        } catch (err) {
            console.log(`There has been an error: ${err}`);
        }
    };

    async addProduct(id_cart, elem) {
        try {
            const cart = await this.list(id_cart)
            if (cart !== undefined) {
                await cart.products.push(elem);
            } else {
                let cartNotExists = { message: "El carrito indicado no existe" };
                return cartNotExists;
            }
        } catch (err) {
            console.log(`There has been an error: ${err}`);
        }
    }

    async deleteProduct(idCart, idProd) {
        try {
            const cart = await this.list(idCart);
            await cart.products.forEach((product, i) => {
                if (product.id == idProd) cart.products.splice(i, 1);
            });
        } catch (err) {
            console.log(`There has been an error: ${err}`);
        }
    };
}

export default CartsDAOMemory;