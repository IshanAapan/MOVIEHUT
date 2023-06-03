import mongoose, { mongo } from "mongoose"
const user_schema=new mongoose.Schema({
    uname:{
        type:String
    },
    uemail:{
        type:String
    },
    upass:{
        type:Number
    }
})
const users=mongoose.model("user",user_schema)
export default users;