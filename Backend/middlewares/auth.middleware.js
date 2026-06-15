const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "Unauthorized"
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "123456"
    );

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Token invalid"
    });
  }
};

const roleMiddleware = (role) => {
  return (req, res, next) => {
    if (!req.user || req.user.role !== role) {
      return res.status(403).json({
        message: "Không có quyền truy cập!"
      });
    }
    next();
  };
};

module.exports = {verifyToken, roleMiddleware};