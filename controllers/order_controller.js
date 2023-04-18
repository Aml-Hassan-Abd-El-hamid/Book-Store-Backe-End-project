const { Order }= require('../modles/order');
const {Book} = require('../modles/book');
const {User} = require('../modles/user');

// api userId
const getAllOrdersByUserID=  async (req, res)=>{
    try{ // find   return list
       
        const allOrders = await Order.find({userId: req.params.userId});
        
        res.status(200).send(allOrders);
    }catch(error){
        res.status(400).send(error);
    }
};
//api orderId
const getOrderByID=  async (req, res)=>{
    try{ 
        const order = await Order.findOne({_id: req.params.id});
        res.status(200).send(order);
    }catch(error){
        res.status(400).send(error);
    }
};

//api 
const addOrder= async (req, res)=>{
    try{
       const book= await Book.findOne({_id: req.body.bookId});
       const user= await User.findOne({_id: req.body.userId}); 

        if(book.count >= req.body.quantity ){
         
        if((book._id== req.body.bookId) && (user._id == req.body.userId))
        { 
        const order = await Order.create(req.body);
            order.quantity= req.body.quantity;
            order.amount= book.price*order.quantity;
            
            order.status= "not confirmed";
            await order.save();
            res.status(200).send(order);
            }
        }
    else{
        
        
        res.status(200).send(" we don’t have this quantity now ");   
    }
    }catch(error){
        res.status(400).send(error);
    }
};

//userId  , orderId
const editOrder= async (req, res) =>{
    
    try{
        const order= await Order.findOne({_id: req.params.orderId});
        const book= await Book.findOne({_id: order.bookId});

        //for authorization purpose
         if(!order){
            res.status(400).send("Order not found");
        }
        
        if(req.params.userId== order.userId  &&   order.status !="Order is shipped"){
            if(req.body.phoneNumber){
                order.phoneNumber= req.body.phoneNumber;
                await order.save();

               
            }
            if(req.body.address){
                order.address= req.body.address;
                await order.save();
            }
            if(req.body.quantity){
                if(book.count >= req.body.quantity ){
                order.quantity= req.body.quantity;
                order.amount= book.price*order.quantity;
               
               await order.save();

               res.status(200).send(order);
                }
                else{
                    res.status(400).send("edit we don’t have this quantity now");
                }
            }
            else{
                res.status(200).send(order);
            }
           
        }
            
        else{
            res.status(400).send("you are not authorized to edit this order");
            
        }
  
    }catch(error){
        res.status(400).send(error);
    }
};


//api user_id, order_id
const deleteOrder= async (req, res)=>{
    try{
        const order = await Order.findOne({_id: req.params.orderId});
        
        if( order.userId == req.params.userId &&   order.status !="Order is shipped"){
         
            await Order.deleteOne({_id: req.params.orderId});
             res.status(200).send(order);
        }
         else{
            res.status(400).send("you are not authorized to delete this order");
        }
       
    }catch(error){
        res.status(400).send(error);
    }
};

//api user_id
const confirmOrder= async (req, res)=>{

    var x=0;
  

    try{
       // find return list
        const allOrders=  await Order.find({userId: req.params.userId});
        let book;
       
        for(let i=0; i<allOrders.length; i++){
         
            x +=allOrders[i].amount;
            book= await Book.findOne({_id: allOrders[i].bookId});
            book.count -= allOrders[i].quantity;
            await book.save();
         
             allOrders[i].status= "Confirmed and Waiting";
            await  allOrders[i].save();
        } 
        
        console.log(x);       
        res.status(200).send("your total order price is "+ x+ " EGP");
    }catch(error){
        res.status(400).send(error);
    }
};



module.exports={
    
    getAllOrdersByUserID,
    getOrderByID,
    addOrder,
    editOrder,
    confirmOrder,
    deleteOrder,
};
