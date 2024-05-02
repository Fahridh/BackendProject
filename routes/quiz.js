const router = require("express").Router();
const user = require("../controller/quiz");

router.post("/createquiz", quiz.createquiz);