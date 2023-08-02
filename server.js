
import express from "express"
import cors from "cors"
import reviews from "./controllers/reviews_route.js"
import bodyParser from 'body-parser'

// import { apihome, movierev } from "./controllers/reviews_controller.js"
const app = express()

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use("/api/v1", reviews)
// app.get("/",apihome)
// app.post("/api/reviews",movierev)
app.use("*", (req, res) => res.status(404).json({error: "not is found"}))


export default app