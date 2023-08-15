// import ReviewsDAO from "../dao/reviewsDAO.js"
import reviews from "../models/review.js";
import movies from "../models/movies.js";
import users from "../models/user.js";
import mongoose from "mongoose";

// export function apihome(request,response){
//   response.send("Movie Route API");
//   response.end();
// }
// export function movierev(request,response){
//   const body=request.body.dhanur;
//   console.log(body);
//   response.status(201).send(body);
//   // response.send(body);
//   response.end();

// }

async function create(request,response){
  try {
    const {review, movie_id,name}= request.body;
    
    //  const validMovieId = new mongoose.Types.ObjectId(movie_id);
    // Check if the movie with the given movie_id exists in the movies collection
    // const validMovieid =mongoose.Types.ObjectId(data.movie_id);
    if(!review)
    {
      response.status(404).json({message:"please write something in review"});
    }
    let existingMovie = await movies.findOne({movie_id});
    if (!existingMovie) {
      // If the movie exists, add the review to the reviews collection
     existingMovie= await movies.create({movie_id});
      // response.status(201).json({ message: "added successfully" });
    } 
      // If the movie does not exist, create a new movie with the given movie_id
      const newreview =await reviews.create({
        review,
        movie_id,
        name,

      });
      
     existingMovie.reviews.push(newreview._id);
     await existingMovie.save();
     const user =await users.findOne({name});
     
     user.reviews.push(newreview._id);
     await user.save();
    response.status(201).json({message:"review added successfully"});
    
  } catch (error) {
    console.log(error);
    response.status(500).json({error:"internal server error"})
  }
}
async function index(request,response){
  try {
    const data=await reviews.find({}).populate("movie_id")
    response.send(data);
  } catch (error) {
    
  }
}
async function getMovieAndReviews(request, response) {
  try {
    const { movie_id } = request.query;
    // console.log(movie_id);

    if (!movie_id) {
      return response.status(400).json({ error: "Movie ID is required" });
    }

    const movie = await movies.findOne({ movie_id }).populate("reviews");
    if (!movie) {
      return response.status(404).json({ error: "Movie not found" });
    }
     console.log(movie);
    response.json({ movie });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Internal server error" });
  }
}
export default {create,index,getMovieAndReviews};

// export default class ReviewsController {
//   static async apiPostReview(req, res, next) {
//     try {
//       const movieId = parseInt(req.body.movieId)
//       const review = req.body.review
//       const user = req.body.user
//       console.log('movieid', movieId)
//       const reviewResponse = await ReviewsDAO.addReview(
//         movieId,
//         user,
//         review
//       )
//       console.log(reviewResponse);
//       res.json({ status: "success" })
//     } catch (e) {
//       res.status(500).json({ error: e.message })
//     }
//   }

//   static async apiGetReview(req, res, next) {
//     try {
//       let id = req.params.id || {}
//       let review = await ReviewsDAO.getReview(id)
//       if (!review) {
//         res.status(404).json({ error: "Not found" })
//         return
//       }
//       res.json(review)
//     } catch (e) {
//       console.log(`api, ${e}`)
//       res.status(500).json({ error: e })
//     }
//   }

//   static async apiUpdateReview(req, res, next) {
//     try {
//       const reviewId = req.params.id
//       const review = req.body.review
//       const user = req.body.user

//       const reviewResponse = await ReviewsDAO.updateReview(
//         reviewId,
//         user,
//         review
//       )

//       var { error } = reviewResponse
//       if (error) {
//         res.status(400).json({ error })
//       }

//       if (reviewResponse.modifiedCount === 0) {
//         throw new Error(
//           "unable to update review",
//         )
//       }

//       res.json({ status: "success" })
//     } catch (e) {
//       res.status(500).json({ error: e.message })
//     }
//   }

//   static async apiDeleteReview(req, res, next) {
//     try {
//       const reviewId = req.params.id
//       const reviewResponse = await ReviewsDAO.deleteReview(reviewId)
//       res.json({ status: "success" })
//     } catch (e) {
//       res.status(500).json({ error: e.message })
//     }
//   }

//   static async apiGetReviews(req, res, next) {
//     try {
//       let id = req.params.id || {}
//       let reviews = await ReviewsDAO.getReviewsByMovieId(id)
//       if (!reviews) {
//         res.status(404).json({ error: "Not found" })
//         return
//       }
//       res.json(reviews)
//     } catch (e) {
//       console.log(`api, ${e}`)
//       res.status(500).json({ error: e })
//     }
//   }


// }
