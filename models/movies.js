import mongoose from "mongoose"
const movies_schema=new mongoose.Schema({
    adult:{
        type:Boolean
    },
    img:{
        type:String
    },
    genre:
    {
        type:String
    },
    original_language:
    {
        type:String
    },
    original_title:
    {
        type:String
    },
    rank:
    {
        type:Number
    },
    poster:
    {
        type:String
    },
    release_date:
    {
        type:Date
    },
    title:
    {
        type:String
    },
    trailer:
    {
        type:String
    },
    vote_count:
    {
        type:Number
    },

    average_rating:{
        type:Number
    }
})
const movies=mongoose.model("movie",movies_schema)
export default movies;
