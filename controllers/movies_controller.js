import movies from "../models/movies.js"

async function create (request,response){
 try {
    await movies.create(request.body)
    console.log(request.body);
    response.send("movies created successfully")
 } catch (error) {
    console.log(error);
 }
}

async function index(request,response){
    try {
       const data=await movies.find({})
       response.status(200).send(data)
    } catch (error) {
       console.log(error);
    }
    
}
export default {create,index}

