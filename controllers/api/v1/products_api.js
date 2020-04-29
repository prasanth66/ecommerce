const Product=require('../../../models/product');

//action to create new product
module.exports.createProduct=async function(req,res){

    try {    
       
    const product=await Product.findOne({name:req.body.name});
    console.log(product);
 //checking whether the product alredy exist in db
    if(product!=null){
       return res.json({
            message:"product name alredy exists"
        })
    };

  //getting the total number of products in database

  const totalProducts=await Product.find({});
  console.log(totalProducts.length);
  //creating new product
    
  Product.create({
      id:totalProducts.length +1,
      name:req.body.name,
      quantity:req.body.quantity
  },(err,prod)=>{
    if(err){
        return res.json(500,{
            message:"error in creating new product"
        });
    }

    //returnnig a success response

  return res.json(200,{
    message:"following product successfully added",
    Product_id:totalProducts.length +1,
    Product_name:req.body.name,
    quantity:req.body.quantity
 });
  })

  

        
    } catch (error) {
        console.log("Error",error);
        return res.json(500,{
            message:"error in creating new product"
        });
        
    }
}

