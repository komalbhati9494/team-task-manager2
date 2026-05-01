const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {

    console.log(req.headers);  // 👈 ADD THIS LINE HERE

    const token = req.headers.authorization?.split(" ")[1];
    console.log("FULL TOKEN:", token);

    if (!token) return res.status(401).json("No token");

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch {
        res.status(401).json("Invalid token");
    }
};