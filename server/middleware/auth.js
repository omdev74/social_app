import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    let token = req.header("Authorization");

    // if  no token was sent
    if (!token) {
      return res.status(403).send("Acess Denied");
    }

    //
    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;

    //in middleware it is used to proceed to the next step after the completion maybe an API
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
