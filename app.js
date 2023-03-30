const express= require("express");
const app= express();
app.use(express.json());

const {bookRouter}= require('./routes/book_router');

app.use('/api/books', bookRouter);

module.exports={app};

