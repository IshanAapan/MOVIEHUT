import mongoose, { mongo } from "mongoose"
const user_schema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    pass:{
        type:String
    }
})
const users=mongoose.model("user",user_schema)
export default users;