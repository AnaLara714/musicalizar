function CourseCard({ course }) {
  const { nome, prof, descricao, num_vagas, turma } = course;

  return (
    <div className="bg-white rounded-xl p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:translate-y-[-5px]">
      <div className="bg-orange-500 w-full h-32 rounded-lg mb-4"></div>

      <h3 className="text-xl font-bold mb-1">{nome}</h3>

      <p className="text-gray-700 mb-1">Professor: {prof}</p>

      <p className="text-gray-600 mb-2">{descricao}</p>

      <p className="mb-2">{num_vagas} vagas</p>

      {turma.map((turmaInfo, index) => (
        <div key={index}>
          <p className="font-medium mb-1">Turma {index + 1}: {turmaInfo.horario}</p>
          {index < turma.length - 1 && (
            <div className="h-px bg-red-300 w-full my-1"></div>
          )}
        </div>
      ))}
    </div>
  )
}

export default CourseCard