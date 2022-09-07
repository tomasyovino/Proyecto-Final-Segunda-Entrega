import FirebaseContainer from "../../containers/FirebaseContainer.js";

class CartsDAOFirebase extends FirebaseContainer {
    constructor() {
        super("carts");
    };

    async save() {
        try {
            const cart = { products: [] };
            const saved = await super.save(cart);
        } catch (err) {
            console.log(`There has been an error: ${err}`);
        }
    }

    async listProducts(id) {
        try {
            const doc = await this.collection.doc(id).get();
            if (!doc.exists) {
                throw new Error ("Document not found...");
            } else {
                const data = doc.data();
                return { ...data };
            }
        } catch (err) {
            console.log(`There has been an error: ${err}`);
        }
    }

    async addProduct(id, prod) {
        try {
            let findCart = await super.list(id);
            let cartUpdated = await findCart["products"].push(prod);
            console.log(findCart);
            return cartUpdated;
        } catch (err) {
            console.log(`There has been an error: ${err}`);
        }

    }

    async deleteProduct(id, id_prod) {
        let findCart = await super.list(id);
        await findCart["products"].doc(id_prod).delete()
    }
}

export default CartsDAOFirebase;