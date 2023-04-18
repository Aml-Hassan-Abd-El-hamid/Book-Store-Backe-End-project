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
});


const Admin= model('Admin',adminSchema);

module.exports= {
    Admin,
};
