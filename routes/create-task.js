const express=require('express');
const Contact=require('../models/todo');
const router = express.Router();
const app = express();
router.post('/',function(req,res){
    // console.log(req.body.due_date);
    Contact.create({
      description:req.body.description,
      category:req.body.category,
      date:req.body.due_date
    }, function(err, newContact){
      if(err)
      {
        console.log('error in creating a contact!');
        return;
      }
      console.log('**********',newContact);
    });
    return res.redirect('/');
  });
module.exports=router;