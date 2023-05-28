import express from "express"
import ReviewsCtrl from "./reviews_controller.js"
import Movie_controller from "./movies_controller.js"

const router = express.Router()

router.get("/movies",Movie_controller.index)
router.post("/movies",Movie_controller.create)
router.post("/movies/review",ReviewsCtrl.create)
// router.route("/movie/:id").get(ReviewsCtrl.apiGetReviews)
// router.route("/new").post(ReviewsCtrl.apiPostReview)
// router.route("/:id")
    // .get(ReviewsCtrl.apiGetReview)
    // .post(ReviewsCtrl.apiPostReview)
    // .put(ReviewsCtrl.apiUpdateReview)
    // .delete(ReviewsCtrl.apiDeleteReview)

export default router