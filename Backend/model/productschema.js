const mongoose = require('mongoose')

const productschema=mongoose.Schema({
    title:String,
    price:String,
    img:String,
    items:String
})

const producttable = mongoose.model('producttable',productschema)

module.exports=producttable;