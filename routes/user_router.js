const { Router }= require("express");
const userRouter= Router();

const userController= require('../controllers/user_controller');

userRouter.get('/:id', userController.getUserByID);
//................... Post.........................................
userRouter.post('/', userController.addUser);
//.................. Put .......................
userRouter.put('/:id', userController.editUserByID);
//............... Delete.....................
userRouter.delete('/:id', userController.deleteUser);

module.exports= {userRouter};
