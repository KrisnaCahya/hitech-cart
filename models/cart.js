// import mongoose 
import mongoose from "mongoose"
 
// Buat Schema
const Cart = mongoose.Schema({
    user_id:{
        type: Number,
        required: true
    },
    cart_list:[
        {
            product_id:{
                type: Number,
                required: true
            },
            quantity:{
                type: Number,
                required: true
            }
        }
    ]
});
 
// export model
export default mongoose.model('Carts', Cart);