const express= require("express");
const app= express();
app.use(express.json());

const {bookRouter}= require('./routes/book_router');
const {userRouter}= require('./routes/user_router');
const {orderRouter}= require('./routes/order_router');
const {adminRouter}= require('./routes/admin_router');


app.use('/api/books', bookRouter);
app.use('/api/users',userRouter );
app.use('/api/orders',orderRouter);
app.use('/api/admins',adminRouter);


module.exports={app};

