import mongoose from "mongoose";
const reviews_schema=new mongoose.Schema({
    review:{
        type:String,
        required:true
    },
    movie_id:{
        type:mongoose.Types.ObjectId,
        ref: 'movie',
        required:true
    }
},{timestamps: true})

const reviews=mongoose.model("review",reviews_schema)
export default reviews;