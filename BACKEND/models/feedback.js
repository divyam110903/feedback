const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/feedbackDB');

const feedback_schema=new mongoose.Schema({
username:String,
email:String,
feedback_text:String,
timestamp:{type:Date,default:Date.now},
categories: {
  type: [String],
  enum: ['bug', 'suggestion', 'feature','others'],
  default: []
},
});


module.exports=mongoose.model('Feedback', feedback_schema);