const {
  createCourse,
  findCourses,
  deleteCourseById,
} = require("../repositories/courseRepository");

const addCourse = async (name, teacher, description, num_places, classes) => {
  return createCourse(name, teacher, description, num_places, classes);
};

const getCourses = async () => {
  console.log(await findCourses());
  return findCourses();
};

const deleteCourse = async (courseId) => {
  return deleteCourseById(courseId);
};

module.exports = { addCourse, getCourses, deleteCourse };
