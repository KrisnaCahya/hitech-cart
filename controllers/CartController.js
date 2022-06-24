// import models
import Cart from "../models/cart.js";

// function get All Carts
export const getCarts = async (req, res) => {
    try {
        const Carts = await Cart.find();
        res.status(201).json({
            status: true,
            message: 'Berhasil',
            data: Carts
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: 'Data Tidak ditemukan',
            data: null
        });
    }

}

// function get single Cart
export const getCartById = async (req, res) => {
    try {
        const cart = await Cart.findOne({user_id:req.params.user_id});
        res.status(201).json({
            status: true,
            message: 'Berhasil',
            data: cart
          });
    } catch (error) {
        res.status(404).json({
            status: false,
            message: 'Data Tidak ditemukan',
            data: null
          });
    }

}

// export const someValue = function(req,res,next){
//     cart.someValue.find({},'user_id',function(err, someValue){
//         if(err)return next (err);
//         res.send(someValue);
//     })
// }
// export const someValue = function(req, res, next) {
//     //query with mongoose
//     var query = cart.findOne({ user_id: 3}, function (err, doc){
//         query.exec(function (err, someValue) {
//             if (err) return next(err);
//             res.send(someValue);
//         });
//       });
    
// };
// export const saveCart = async (req, res) => {
//     var { cartId, userId, productId, qty } = req.body;
//     const cart = new Cart({
//         cart_id: cartId,
//         user_id: userId,
//         product_id: productId,
//         quantity: qty,
//     })
//     cart.save((err, data) => {
//         if (err) {
//             return res.status(500).json({ status: false, message: "Error" });
//         }
//         console.log(data);
//         return res.json({ data: data, status: true, message: "order dibuat" });
//     });
// }
// function Create Cart
export const saveCart = async (req, res) => {
    const cart = new Cart(req.body);
    try {
        const savedCart = await cart.save();
        res.status(201).json({
            status: true,
            message: 'Berhasil Menambahkan ke Keranjang',
            data: savedCart
          });
    } catch (error) {
        res.status(400).json({
            status: false,
            message: 'Gagal Menambahkan ke Keranjang',
            data: null
          });
    }
}

// function Delete Cart
export const deleteCart = async (req, res) => {
    const cekId = await Cart.findOne({product_id:req.params.product_id});
    if (!cekId) return res.status(404).json({ message: "Data tidak ditemukan" });
    try {
        const deletedCart = await Cart.deleteOne({product_id:req.params.product_id});
        res.status(201).json({
            status: true,
            message: 'Data Berhasil dihapus',
            data: deletedCart
        });
    } catch (error) {
        res.status(400).json({
            status: false,
            message: 'Gagal Menghapus Data',
            data: null
        });
    }
}


  