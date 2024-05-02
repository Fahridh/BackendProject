const router = require("express").Router();
const user = require("../controller/user");
const { verifyToken } = require("../middleware/auth");

router.get("/profile", verifyToken, user.userById);
router.put("/profile", verifyToken, user.update);
module.exports = router;
