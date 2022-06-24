// import express
import express from "express";
// import controllers
import {
    getCarts,
    getCartById, 
    saveCart, 
    deleteCart,
 } from "../controllers/CartController.js";
 
    // express router
const router = express.Router();
 
// Route get All Cart
router.get('/cart', getCarts);
// Route get single Cart
router.get('/cart/:user_id', getCartById);
// Route CREATE Cart
router.post('/cart', saveCart);
// Route DELETE Cart
router.delete('/cart/:product_id', deleteCart);

// router.get('/cart',getByUser)

// export router
export default router;