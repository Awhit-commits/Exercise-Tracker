let mongoose = require('mongoose')

let Schema = mongoose.Schema

let userSchema = new Schema ({
    username:String
},{
    timestamps:true
})
module.exports=mongoose.model('User',userSchema)