import mongoose from "mongoose";
import users from "../models/user.js";
import movies from "./movies.js";
// import movies from "../models/movies.js"

const reviews_schema=new mongoose.Schema({
    review:{
        type:String,
        required:true
    },
    movie_id:{
        type:Number,
        ref: 'movies',
        required:true
    },
    name:
    {
        type:String,
        ref:"users",
        required:'true'

    },

},{timestamps: true});

const reviews=mongoose.model("review",reviews_schema);
export default reviews;