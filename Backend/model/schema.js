const mongoose=require('mongoose')

const schema = mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const singup=mongoose.model('singup',schema)

module.exports=singup;