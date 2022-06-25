const mongoose=require("mongoose")
const { status } = require("../../controllers/user.controller")
const user = mongoose.model("user", {
    name:{
        type:String,
        trim:true,
        lowercase:true,
        required:true,
        unique:true
    },
    email:{
       
      
       
    },
    status:{
        default:false
    }

})
module.exports = user