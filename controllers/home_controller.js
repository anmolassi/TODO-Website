const Contact=require('../models/todo');
module.exports.home = function (req, res) {
   
  
    Contact.find({/*condition     name:"New"*/},function(err,contacts){
      if(err)
      {
        console.log('Error in fetching contacts from db');
        return;
      }
      return res.render("home", { todo_list: contacts});
    })
    
  };