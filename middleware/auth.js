const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader)
      return res.status(401).json({
        message: "Silahkan Login Terlebih Dahulu",
      });

    const token = authHeader && authHeader.split(" ")[1];
    if (!token)
      return res.status(401).json({
        message: "Silahkan Login Terlebih Dahulu",
      });

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        if (err instanceof jwt.TokenExpiredError) {
          return res.status(401).json({
            message: "Token kedaluwarsa, silahkan login ulang",
          });
        } else if (err instanceof jwt.JsonWebTokenError) {
          return res.status(401).json({
            message: "Token tidak valid. Silahkan login ulang",
          });
        } else {
          console.log(err);
          return res.status(500).json({
            message: "Kesalahan pada internal server",
          });
        }
      } else {
        res.locals.user = decoded;
        return next();
      }
    });
  } catch (error) {
    return res.status(500).json({
      message: "Kesalahan pada internal server",
    });
  }
};
