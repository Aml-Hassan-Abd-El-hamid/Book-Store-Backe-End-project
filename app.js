const express= require("express");
const app= express();
app.use(express.json());

const {bookRouter}= require('./routes/book_router');
const {userRouter}= require('./routes/user_router');
const {orderRouter}= require('./routes/order_router');

app.use('/api/books', bookRouter);
app.use('/api/users',userRouter );
app.use('/api/orders',orderRouter);

module.exports={app};

