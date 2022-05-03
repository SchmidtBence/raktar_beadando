import * as express from 'express';
import { OrderController } from './controllers/order.controller';
import { PartController } from './controllers/part.controller';
import { ProductController } from './controllers/product.controller';
import { validOrderRequestBody } from './validators/order.validator';
import { validPartRequestBody } from './validators/part.validator';
import { validProductRequestBody } from './validators/product.validator';

export function getAllRoutes() {
    const router = express.Router();

    router.get("/api", (req, res) => {
        res.send("<h1>Root of the backend</h1>");
    });

    //PRODUCT
    const productController = new ProductController();
    router.get("/api/product", productController.getAll);
    router.post("/api/product", validProductRequestBody, productController.create);
    router.delete("/api/product/:id", productController.delete);

    //PART
    const partController = new PartController();
    router.get("/api/part", partController.getAll);
    router.post("/api/part", validPartRequestBody, partController.create);
    router.delete("/api/part/:id", partController.delete);
    router.put("/api/part/:id", partController.increaseAmount);

    //ORDER
    const orderController = new OrderController();
    router.get("/api/order", orderController.getAll);
    router.post("/api/order", validOrderRequestBody, orderController.makeOrder);

    return router;
}