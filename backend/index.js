const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()


const app = express();
//middleware
app.use(express.json());
app.use(cors({
  origin : ['http://localhost:5173/'],
  credentials:true
}))


//routers
const BookRouters = require('./src/books/books.routers')

app.use('/api/books',BookRouters);



const Port = process.env.Port || 5000 ;

async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.use('/',(req,res)=>{
    res.send("Welcome to My Book Store");;
})
  
}
//zKZLXZUIbA68fNV0
main().then(()=>console.log('Mongoose is Ready')).catch(err => console.log(err));


app.listen(Port,()=>
console.log(`app is listning at port ${Port}`))