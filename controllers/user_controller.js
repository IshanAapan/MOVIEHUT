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
async function login(request,response){
    try {
        let email=request.body.email;
        console.log(email);
        data = await users.findOne({email:email})
        console.log(data);
        response.send(data)

    } catch (error) {
        
    }
}
export default {create,login};