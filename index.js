const express=require('express');
const app= express();
const port=8000;
const Contact=require('./models/todo');

//setup for mongoose
const db=require('./config/mongoose')

//set up for static files 
app.use(express.static('./assests'));//with respect to this we need to give the location of our static files
app.use(express.urlencoded());

//set up the view engine
app.set('view engine', 'ejs');
app.set('views','./views');

//use express server
app.use('/',require('./routes'));//it will move to routes/index.js for furthur 
app.listen(port,function(err){
    if(err)
    {
        console.log('Error: ',err);
        console.log(`Error: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});





























// app.post('/signup',function(req,res){
//     console.log(req.body);
//     Contact.create({
//       fname:req.body.fname,
//       lname:req.body.lname,
//       email:req.body.email,
//       password:req.body.password
//     }, function(err, newContact){
//       if(err)
//       {
//         console.log('error in creating a contact!');
//         return;
//       }
//       console.log('**********',newContact);
//     });
//     return res.redirect('/');
  
//   });