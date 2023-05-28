import mongoose from "mongoose"
const movies_schema=new mongoose.Schema({
    name:{
        type:String
    },
    img:{
        type:String
    },
    rating:{
        type:Number
    }
})
const movies=mongoose.model("movie",movies_schema)
export default movies;