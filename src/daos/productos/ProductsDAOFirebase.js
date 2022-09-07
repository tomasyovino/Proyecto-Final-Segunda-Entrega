import FirebaseContainer from "../../containers/FirebaseContainer.js";

class ProductsDAOFirebase extends FirebaseContainer {
    constructor() {
        super("products")
    }
}

export default ProductsDAOFirebase;