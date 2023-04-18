const {User}= require('../modles/user');



const getUserByID=  async (req, res)=>{
    try{
        const user= await User.findOne({_id: req.params.id});
        res.status(200).send(user);
    }catch(error){
        res.status(400).send(error);
    }
};


//................... Post.........................................

const addUser= async (req, res)=>{
    try{
        const user= await User.create(req.body);
        res.status(200).send(user);
    }catch(error){
        res.status(400).send(error);
    }
};
//.................. Put .......................
const editUserByID=  async (req, res)=>{
    try{
        const user= await User.findOne({_id: req.params.id});
        if(!user){
            return res.status(404).send("user not found");
        }
        if(req.body.userName){
            user.userName= req.body.userName;       
        }
         if(req.body.password){
            user.password= req.body.password;       
        } 
        if(req.body.email){
            user.email= req.body.email;       
        } 
        await user.save();
        res.status(200).send(user);
    
    }catch(error){
        res.status(400),send(error);
    } 

};

//............... Delete.....................

const deleteUser=  (req, res)=>{
   try{
      const user= await User.findOne({_id: req.params.id});
      await User.deleteOne({_id: req.params.id});
      res.status(200).send(user);
   }
   catch(error){
    res.status(400).send(error);
   }
};


module.exports= {
    
    getUserByID,
    addUser,
    editUserByID,
    deleteUser,
};
