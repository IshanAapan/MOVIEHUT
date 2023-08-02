import mongoose from "mongoose"
const movies_schema=new mongoose.Schema({
    // adult:{
    //     type:Boolean
    // },
   movie_id:
    {
        type:Number,
        required:true,
    },
    reviews:[{type:mongoose.Schema.Types.ObjectId,ref:"reviews"}],
})
const movies=mongoose.model("movies",movies_schema)
export default movies;
    // img:{
    //     type:String
    // },
    // genre:
    // {
    //     type:String
    // },
    // original_language:
    // {
    //     type:String
    // },
    // original_title:
    // {
    //     type:String
    // },
    // rank:
    // {
    //     type:Number
    // },
    // poster:
    // {
    //     type:String
    // },
    // release_date:
    // {
    //     type:Date
    // },
    // title:
    // {
    //     type:String
    // },
    // trailer:
    // {
    //     type:String
    // },
    // vote_count:
    // {
    //     type:Number
    // },

    // average_rating:{
    //     type:Number
    // }

