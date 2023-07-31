import users from "../models/user.js";
import jwtToken from "jsonwebtoken";
import validator from "validator";
async function create(request, response) {
  try {
    await users.create(request.body);
    console.log(request.body);
    const { email } = request.body;
    const { pass } = request.body;
    if (!validator.isEmail(email)) {
      return response.status(400).json({ error: "enter valid email" });
      console.log("sahi email paa");
    }
    if (!validator.isStrongPassword(pass)) {
      return response.status(400).json({ error: "enter valid password" });
      console.log("sahi password dal");
    }
    response.send("user ban chhuka hai");
  } catch (error) {
    console.log(error);
  }
}
async function login(request, response) {
  try {
    const { email } = request.body; // Retrieve the email value from the request body
    const { pass } = request.body; // Retrieve the password from the the request body
    console.log(request.body);

    if (!email) {
      // If email is not provided in the request body, send an error response
      return response.status(400).json({ error: "Email is required" });
    }
    if (!pass) {
      //password is not provided in the request body
      return response.status(400).json({ error: "password is required" });
    }

    console.log(email);
    console.log(pass);

    // Query the 'users' collection for a document with a matching email
    const data = await users.findOne({ email });
    const password = await users.findOne({ pass});

    if (!data) {
      // If no user is found with the provided email, send an error response
      return response.status(404).json({ error: "User not found" });
      console.log("email is not presemt");
    }
    if (!password) {
      // If no user is found with the provided password, send an error response
      return response.status(404).json({ error: "User not found" });
      console.log("password is not found");
    }

    console.log("User found:", data);
    const token = jwtToken.sign(data.email, "123");
    console.log(token);
    // Send the retrieved data as the response
    // response.send(token});
     return response.json({token});
  } catch (error) {
    // If an error occurs during execution, send an error response
    console.error("An error occurred:", error);
    response.status(500).json({ error: "Internal server error" });
  }
}

export default { create, login };
