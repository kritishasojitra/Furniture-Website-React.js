const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1/Furniture-app");

const db=mongoose.connection;

db.on("connected",()=>{
    console.log("Database connected...");
    
})

module.exports=db;

