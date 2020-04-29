const mongoose=require('mongoose');

//creating schema for products

const productSchema=new mongoose.Schema({
    
    id:{
      type:Number,
      required:true
    
    },
    name:{
      type:String,
      required:true
    },
    quantity:{
      type:String,
      required:true
    }

});

//creating collection name in db
const Product=mongoose.model('product',productSchema);

//exporting schema
module.exports=Product;