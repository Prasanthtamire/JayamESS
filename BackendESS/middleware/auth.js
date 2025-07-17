const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "Authorization header missing" });

  const token = authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Token missing" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.log("JWT Verify Error:", err);
      const msg =
        err.name === "TokenExpiredError" ? "Token expired" :
        err.name === "JsonWebTokenError" ? "Invalid token" :
        "Authentication error";
      return res.status(403).json({ message: msg });
    }


    req.user = decoded;
    next();
  });
}


module.exports = authenticateToken;
