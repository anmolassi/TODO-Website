//building schema
const mongoose=require('mongoose');
const todoSchema = new mongoose.Schema({
    description:{
        type: String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
});


const todo = mongoose.model('todo',todoSchema);

module.exports=todo;