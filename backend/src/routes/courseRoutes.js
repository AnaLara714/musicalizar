const express = require("express");
const {
  createCourseHandler,
  getCourseHandler,
  deleteCourseHandler,
} = require("../controllers/courseController");
const { isAuthenticated } = require("../middlewares/sessionMiddleware");

const router = express.Router();

router.post("/", isAuthenticated, createCourseHandler);
router.get("/", getCourseHandler);
router.delete("/:id", isAuthenticated, deleteCourseHandler);

module.exports = router;
