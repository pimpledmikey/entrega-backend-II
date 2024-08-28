import { request, response } from "express";

export const isUserCart = async (req = request, res = response, next) => {
    const { cid } = req.params;
    console.log("req.user:", req.user); // Debugging line
    console.log("req.user.cart:", req.user.cart); // Debugging line
    console.log("cid:", cid); // Debugging line


    // aqui se compara el id del carrito del usuario con el id del carrito que se recibe por parametro
    if (req.user.cart._id !== cid) {
        return res.status(401).json({ status: "error", msg: "Wrong cart user" });
    }
// si el id del carrito del usuario es igual al id del carrito que se recibe por parametro se continua con la ejecucion
    next();
};