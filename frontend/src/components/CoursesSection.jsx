import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";

export default function CoursesSection() {
  const [courses, setCourses] = useState([]);

  async function fetchCourses() {
    try {
      const response = await fetch("http://localhost:3000/api/courses");
      const data = await response.json();
      setCourses(data.courses);
    } catch (error) {
      console.error("Erro ao buscar cursos:", error);
    }
  }

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div id="cursos" className="bg-[#6BE4FF] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-nerko uppercase text-center mb-12 md:text-3xl">
          Nossos Cursos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
