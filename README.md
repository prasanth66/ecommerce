### to start the application

  npm start 
  port number 8000
  install all dependencies in package.json before running the application

### All Api's collection

1. http://localhost:8000/api/v1/products/create  (to add new product)

  req type:post

  # request

  product:{
      name:laptop,
      quantity:10
  }
  # response

  data{
      product:{
          name:laptop,
          quantity:10
      }
  }


2.  http://localhost:8000/api/v1/products (api to get list of all products)

    req type: get

    # response
    data{
      product:{
          id:1
          name:laptop,
          quantity:10
      },{
          id:2,
          name : camera,
          quantity:15
      }
  }



3. http://localhost:8000/api/v1/products/:id  (api to delete partcular product with given id)
  
   req type: delete

   # response

   data:{
       message:"product deleted"
   }


4.    http://localhost:8000/api/v1/products/:id /update_quantity?numer=10  (api to update quantity) 

    req type:post

    # response 

    data:{
        message:"updated successfully
        product:{
            id:1,
            name:laptop,
            quantity;100
        }
    }# ecommerce
