import users from "../models/user.js"
import jwtToken from "jsonwebtoken"
async function create(request, response) {
  try {
    await users.create(request.body)
    console.log(request.body);
    response.send("User has been created")
  } catch (error) {
    console.log(error);
  }
}
async function login(request, response) {
  try {
    const { email } = request.body; // Retrieve the email value from the request body
    const {pass } = request.body; // Retrieve the password from the the request body

    if (!email) {
      // If email is not provided in the request body, send an error response
      return response.status(400).json({ error: 'Email is required' });
    }

    if(!pass)
    { //password is not provided in the request body
      return response.status(400).json({error:'password is required'});
    }

    console.log(email);

    // Query the 'users' collection for a document with a matching email
    const data = await users.findOne({ email });

    if (!data) {
      // If no user is found with the provided email, send an error response
      return response.status(404).json({ error: 'User not found' });
    }

    // If a user is found, we generate a JWT token using the jsonwebtoken library. The token is signed with the user's email as the payload and a secret key ("your_secret_key"). 

    const token = jwtToken.sign({ email:email }, "1234");

    response.json({ token });
  } catch (error) {
    console.error("An error occurred:", error);
    response.status(500).json({ error: "Internal server error" });
  }

}
export default { create, login };