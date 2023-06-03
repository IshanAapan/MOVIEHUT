import users from "../models/user.js"
async function create(request,response){
    try {
        await users.create(request.body)
        console.log(request.body);
        response.send("user ban chhuka hai")
    } catch (error) {
        console.log(error);
    }
}
export default {create};