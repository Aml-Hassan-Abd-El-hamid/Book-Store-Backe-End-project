const { Router }= require("express");
const adminRouter= Router();

const adminController= require('../controllers/admin_controller');

adminRouter.get('/', adminController.getAllAdmins);

adminRouter.get('/:id', adminController.getAdminByID);
//................... Post.........................................
adminRouter.post('/', adminController.addAdmin);
//.................. Put .......................
adminRouter.put('/:id', adminController.editAdminByID);
//............... Delete.....................
adminRouter.delete('/:id', adminController.deleteAdmin);

adminRouter.put('/:adminId/:orderId', adminController.confirmShipping);

adminRouter.delete('/:adminId/:userId', adminController.deleteUser);

module.exports= {adminRouter};
