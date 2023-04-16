const mongoose= require('mongoose');
const Schema= mongoose.Schema;
const model= mongoose.model;

const adminSchema= Schema({

    adminName:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },

    userId:{
        type: Schema.Types.ObjectId,
        ref: 'User',
    },

    bookId:{
        type: Schema.Types.ObjectId,
        ref: 'Book',
    },
    orderId:{
        type: Schema.Types.ObjectId,
        ref: 'Order',
    },
});


const Admin= model('Admin',adminSchema);

module.exports= {
    Admin,
};