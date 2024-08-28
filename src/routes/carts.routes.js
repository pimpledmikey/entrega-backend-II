 import { Router } from "express";
import cartsControllers from "../controllers/carts.controllers.js";
import { checkProductAndCart } from "../middlewares/checkProductAndCart.middleware.js";
import { authorization } from "../middlewares/authorization.middleware.js";
import { isUserCart } from "../middlewares/isUserCart.middleware.js";
import { passportCall } from "../middlewares/passport.middleware.js";

const router = Router();

router.post("/", cartsControllers.createCart);

router.get("/:cid", cartsControllers.getCartById);

router.post(

    "/:cid/product/:pid",
    passportCall("jwt"),
    authorization("admin"),
    isUserCart,
    checkProductAndCart,
    cartsControllers.addProductToCart

);

router.delete("/:cid/product/:pid", passportCall("jwt"), authorization("admin"), checkProductAndCart, cartsControllers.deleteProductToCart);

router.put(
    "/:cid/product/:pid",
    passportCall("jwt"),
    authorization("admin"),
    checkProductAndCart,
    cartsControllers.updateQuantityProductInCart
);

router.delete("/:cid", passportCall("jwt"), authorization("admin"), cartsControllers.deleteProductToCart);

router.get("/:cid/purchase", passportCall("jwt"), authorization("admin"), cartsControllers.purchaseCart);

export default router;
