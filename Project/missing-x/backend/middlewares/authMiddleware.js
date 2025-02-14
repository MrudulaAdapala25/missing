const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) {
        return res.status(401).json({ message: "Authorization denied: No token provided" });
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_KEY);
        req.user = verified;
        next();
    } catch (error) {
        console.error("Token verification failed:", error);
        res.status(403).json({ message: "Token is not valid or expired!" });
    }
};
 