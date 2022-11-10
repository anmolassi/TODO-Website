const express=require('express');
const router = express.Router();
const homeController=require('../controllers/home_controller');
router.get('/',homeController.home);
router.use('/create-task',require('./create-task'));
router.use('/delete-task',require('./delete-task'));
module.exports=router;