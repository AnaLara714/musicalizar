import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { IoIosArrowDown } from "react-icons/io";
import { Trash2, Plus, Maximize2 } from "lucide-react";
import ModalAddCourse from "./ModalAddCourse";
import CourseCard from "./CourseCard";
import { AuthContext } from "../context/AuthContext";

const Manager = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [courses, setCourses] = useState([]);

  const { isRegistration, setIsRegistration } = useContext(AuthContext);

  async function fetchCourses() {
    try {
      const response = await fetch("http://localhost:3000/api/courses");
      const data = await response.json();
      setCourses(data.courses);
    } catch (error) {
      console.error("Erro ao buscar cursos:", error);
    }
  }

  async function handleDeleteCourse(courseId) {
    if (window.confirm("Você tem certeza que deseja deletar este curso?")) {
      try {
        const response = await fetch(
          `http://localhost:3000/api/courses/${courseId}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error("Erro ao deletar o curso");
        }

        // Atualiza a lista de cursos após a exclusão
        setCourses(courses.filter((course) => course.id !== courseId));
        alert("Curso deletado com sucesso!");
      } catch (error) {
        alert(error.message);
      }
    }
  }

  useEffect(() => {
    fetchCourses();
  }, [courses]);

  return (
    <div className="min-h-screen bg-[#7FE7FF] p-4 sm:p-6 md:p-8 lg:px-12 xl:px-40 max-w-[1400px] mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 md:mb-8 gap-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-nerko">
          Olá, gerencie a Musicalizar
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-stretch gap-4 mb-6 md:mb-8">
        <div className="w-full lg:w-auto">
          <Card className="h-full">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8 ">
              <span className="text-black text-lg sm:text-xl font-medium">
                Inscrições
              </span>
              <div className="relative w-full sm:w-auto min-w-[200px]">
                <select
                  value={isRegistration ? "Ativas" : "Inativas"}
                  onChange={(e) =>
                    setIsRegistration(e.target.value === "Ativas")
                  }
                  className="w-full appearance-none bg-[#E4E4E4] py-2 pl-4 pr-8 rounded-lg border border-gray-300 text-sm sm:text-base"
                >
                  <option>Ativas</option>
                  <option>Inativas</option>
                </select>
                <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <Card className="w-full lg:w-auto">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center gap-2 p-4 w-full"
          >
            <Plus size={20} />
            <span className="text-sm sm:text-base">Criar cursos</span>
          </button>
        </Card>
      </div>

      <ModalAddCourse
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <h2 className="text-xl sm:text-2xl md:text-3xl font-nerko pb-4">
        Cursos
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {courses.length > 0 ? (
          courses.map((course, index) => (
            <CourseCard
              key={index}
              course={course}
              onDelete={handleDeleteCourse}
            />
          ))
        ) : (
          <p className="text-center">Ainda não cursos criados</p>
        )}
      </div>
    </div>
  );
};

export default Manager;
