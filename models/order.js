const mongoose= require("mongoose");
const Schema= mongoose.Schema;
const model= mongoose.model;

const orderSchema= Schema({
    phoneNumber:{
        type:Number,
        required: true,
    },
    address:{
        type: String,
        required:true,
    },
    quantity:{
        type: Number,
        required: true,
    },
    amount:{
        type :Number,
    },
    status:{
        type: String,
    },
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    bookId:{
        type: Schema.Types.ObjectId,
        ref: 'Book',
    },
});

const Order= model('Order',orderSchema );

module.exports={
    Order,
};