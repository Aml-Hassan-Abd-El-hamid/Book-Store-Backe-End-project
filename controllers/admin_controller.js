const {Admin}= require('../modles/admin');
const { Order }= require('../modles/order');
const { User }= require('../modles/user');

//................. get courses............................

const getAllAdmins=  async (req, res)=>{
    try{
        const allAdmins= await Admin.find({});
        res.status(200).send(allAdmins);
    }catch(error){
        res.status(400).send(error);
    }
   
};
// api adminId
const getAdminByID=  async (req, res)=>{
    try{
        const admin= await Admin.findOne({_id: req.params.id});
        res.status(200).send(admin);
    }catch(error){
        res.status(400).send(error);
    }
};


//................... Post.........................................

const addAdmin= async (req, res)=>{
    try{
        const admin= await Admin.create(req.body);
        res.status(200).send(admin);
    }catch(error){
        res.status(400).send(error);
    }
};
//.................. Put .......................
// api adminId
const editAdminByID=  async (req, res)=>{
    try{
        const admin= await Admin.findOne({_id: req.params.id});
        if(!admin){
            return res.status(404).send("admin not found");
        }
        if(req.body.adminName){
            admin.adminName= req.body.adminName;       
        }
         if(req.body.password){
            admin.password= req.body.password;       
        } 
        if(req.body.email){
            admin.email= req.body.email;       
        } 
        await admin.save();
        res.status(200).send(admin);
    
    }catch(error){
        res.status(400),send(error);
    } 

};

//............... Delete.....................
// api adminId
const deleteAdmin=  (req, res)=>{
   try{
    const admin= await Admin.findOne({_id: req.params.id});
    await Admin.deleteOne({_id: req.params.id});
    res.status(200).send(admin);
   }
   catch(error){
    res.status(400).send(error);
   }
};

//api adminId, orderId
const confirmShipping= async (req, res)=>{
   try{
    const admin= await Admin.findOne({_id: req.params.adminId});
    const order= await Order.findOne({_id: req.params.orderId});
    if( admin._id == req.params.adminId){
        if(order.status == "Confirmed and Waiting"){
        order.status="Order is shipped";
        await order.save();
        res.status(200).send("ok");
    }
    else{
        res.status(400).send("User should confirm his order");
    }
    }
   }
   catch(error){
    res.status(400).send(error);
   }     
};

//api adminId, userId
const deleteUser= async (req, res)=>{
   try{
    const admin= await Admin.findOne({_id: req.params.adminId});
    const user= await User.findOne({_id: req.params.userId});
    if( admin._id == req.params.adminId){
        if(!user){
            res.status(400).send("invalid userId");
        }
        else{
            await User.deleteOne({_id: req.params.userId});
            res.status(200).send(user);
    }}
   }
   
   catch(error){
   
    res.status(400).send(error);
   
}     
};



module.exports= {
    
   getAllAdmins,
   getAdminByID,
   addAdmin,
    editAdminByID,
    deleteAdmin,
    confirmShipping,
        deleteUser,

};
