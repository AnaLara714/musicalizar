import CourseCard from "./CourseCard";

function CoursesSection() {
  const courses = [
    {
      title: "Guitarra Elétrica",
      teacher: "professor tal",
      description: "mini. descrição",
      spots: "10",
      classes: [
        "Turma 1: Seg. e Qua. 18h - 19h30",
        "Turma 2: Ter. e Qui. 18h - 19h30"
      ]
    },
    {
      title: "Contrabaixo Elétrico",
      teacher: "professor tal",
      description: "mini. descrição",
      spots: "7",
      classes: [
        "Turma 1: Seg. e Qua. 18h - 19h30",
        "Turma 2: Ter. e Qui. 18h - 19h30"
      ]
    },
    {
      title: "Musicalização Infantil",
      teacher: "professor tal",
      description: "mini. descrição",
      spots: "20",
      classes: [
        "Turma 1: Seg. e Qua. 18h - 19h30",
        "Turma 2: Ter. e Qui. 18h - 19h30"
      ]
    },
    {
      title: "Guitarra Elétrica",
      teacher: "professor tal",
      description: "mini. descrição",
      spots: "10",
      classes: [
        "Turma 1: Seg. e Qua. 18h - 19h30",
        "Turma 2: Ter. e Qui. 18h - 19h30"
      ]
    },
    {
      title: "Guitarra Elétrica",
      teacher: "professor tal",
      description: "mini. descrição",
      spots: "10",
      classes: [
        "Turma 1: Seg. e Qua. 18h - 19h30",
        "Turma 2: Ter. e Qui. 18h - 19h30"
      ]
    },
    {
      title: "Guitarra Elétrica",
      teacher: "professor tal",
      description: "mini. descrição",
      spots: "10",
      classes: [
        "Turma 1: Seg. e Qua. 18h - 19h30",
        "Turma 2: Ter. e Qui. 18h - 19h30"
      ]
    }
  ];

  return (
    <div id="cursos" className="bg-[#6BE4FF] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-bold uppercase text-center mb-12 md:text-3xl">Nossos Cursos</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CoursesSection