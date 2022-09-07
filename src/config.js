import dotenv from "dotenv";
import ProductsDAOFile from "./daos/productos/ProductsDAOFile.js";
import CartsDAOFile from "./daos/carts/CartsDAOFile.js";
import ProductsDAOFirebase from "./daos/productos/ProductsDAOFirebase.js";
import CartsDAOFirebase from "./daos/carts/CartsDAOFirebase.js";
import ProductsDAOMemory from "./daos/productos/ProductsDAOMemory.js";
import CartsDAOMemory from "./daos/carts/CartsDAOMemory.js"
import ProductsDAOMongo from "./daos/productos/ProductsDAOMongo.js";
import CartsDAOMongo from "./daos/carts/CartsDAOMongo.js";

dotenv.config();

let productsDAO;
let cartsDAO;

switch (process.env.PERS) {
    case "file":
        productsDAO = new ProductsDAOFile();
        cartsDAO = new CartsDAOFile();
        break;
    case "firebase":
        productsDAO = new ProductsDAOFirebase();
        cartsDAO = new CartsDAOFirebase();
        break;
    case "memory":
        productsDAO = new ProductsDAOMemory();
        cartsDAO = new CartsDAOMemory();
        break;
    case "mongo":
        productsDAO = new ProductsDAOMongo();
        cartsDAO = new CartsDAOMongo();
        break;
}

export { productsDAO, cartsDAO };