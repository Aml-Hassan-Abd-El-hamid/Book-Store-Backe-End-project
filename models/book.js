
const mongoose= require('mongoose');

const bookSchema= new mongoose.Schema({
    bookName:{
        type: String,
        required: true,
    },

    Author:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    count:{
        type: Number,
        require: true,
    },
    publishingYear:{
        type:Number,
        require: true,
    },
    publishingHouse:{
        type: String,
        require: true,
    },
    rate:{
        type: Number,
        require: true,
    },
    about:{
        type: String,
        require: true,
    },
});


const Book= mongoose.model('Book', bookSchema);

module.exports= {
    Book,
};