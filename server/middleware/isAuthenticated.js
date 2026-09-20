import jwt from "jsonwebtoken";
const isAuthenticated = async (req, res, next) => {
  try {
    let { token } = req.cookies;
    if (!token) {
      return res.status(401).json({
        message: "Token not found.",
      });
    }
    let verifyToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!verifyToken) {
      return res.status(401).json({
        message: "User doesn't have valid token",
      });
    }
    req.userId = verifyToken.userId;
    next();
  } catch (error) {
    return res.status(401).json({
      message: `is auth error ${error}`,
    });
  }
};

export default isAuthenticated;
