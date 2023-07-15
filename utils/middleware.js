import jwtToken from "jsonwebtoken"
const authenticateToken = (req, res, next) => {
    // Get the token from the request header or other sources
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }

    // Verify the token
    jwtToken.verify(token, '1234', (err, user_data) => {
        if (err) {
            return res.status(401).json({ error: 'Failed to authenticate token' });
        }

        // Token is valid, store the decoded payload for further use
        req.user = user_data;
        next();
    });
};
export default authenticateToken;