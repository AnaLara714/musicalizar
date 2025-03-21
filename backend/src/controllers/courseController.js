const {
  addCourse,
  deleteCourse,
  getCourses,
} = require("../services/courseService");

const createCourseHandler = async (req, res) => {
  const { name, teacher, description, num_places, classes } = req.body;

  try {
    const course = await addCourse(
      name,
      teacher,
      description,
      num_places,
      classes
    );
    res.status(201).json({ course });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getCourseHandler = async (req, res) => {
  try {
    const courses = await getCourses();
    console.log(await courses);
    res.status(200).json({ courses });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteCourseHandler = async (req, res) => {
  const id = req.params.id;
  try {
    const deleteCourseById = await deleteCourse(id);
    res.status(200).json({ deleteCourseById });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createCourseHandler,
  getCourseHandler,
  deleteCourseHandler,
};
