const express = require("express");
const router = express.Router();
const Contact=require('../models/todo');
router.post("/", function (req, res) {
  console.log(req.body);
  let ids = req.body.ids;
  if(typeof ids=='string')
  {
    ids=[ids];
  }
  console.log(ids);
  Contact.deleteMany({_id:{
    $in:ids
  }},function(err){
    if(err)
    {
      console.log("ERORRR",err);
    }
    res.redirect("back");
  })
  // Contact.findOneAndDelete({description:id}, function (err) {
  //   if (err) {
  //     console.log("Error in deleting an object from database");
  //     return;
  //   }
  //   return res.redirect("back");
  // });
});
module.exports = router;
