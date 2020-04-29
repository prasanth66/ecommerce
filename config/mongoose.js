//connecting to the database
const mongoose=require('mongoose');

//connecting db here name of db is ecommerce-db
mongoose.connect('mongodb://localhost/ecommerce-db');

const db=mongoose.connection;
//checking if there is error while conection
db.on('error',console.error.bind(console,'error connectig to db'));
//checking whether connection is opened
db.once('open',function(){
    console.log('db sucesfully conected');
})

module.exports=db;