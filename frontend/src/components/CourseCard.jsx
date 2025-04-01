import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Trash2 } from "lucide-react";

export default function CourseCard({ course, onDelete }) {
  const { nome, prof, descricao, num_vagas, turma, id } = course;

  const { isAuthenticated } = useContext(AuthContext);
  // console.log(isAuthenticated);

  return (
    <div className="bg-white rounded-xl p-4 transition-transform hover:translate-y-[-5px] border-r-8 border-b-8 border-gray-900 h-min w-[300]">
      <div className="bg-orange-500 w-full h-32 rounded-lg mb-4"></div>

      <h3 className="text-xl font-bold mb-1">{nome}</h3>

      <p className="text-gray-700 mb-1">Professor: {prof}</p>

      <p className="text-gray-600 mb-2 wrapper">{descricao}</p>

      <p className="mb-2">{num_vagas} vagas</p>

      {turma.map((turmaInfo, index) => (
        <div key={index}>
          <p>{turmaInfo.nivel}</p>
          <p className="font-medium mb-1 border-b-2 border-[#EB8981] pb-1">
            Turma {index + 1}: {turmaInfo.horario}
          </p>
          {index < turma.length - 1 && <div className="h-px w-full my-1"></div>}
        </div>
      ))}

      {isAuthenticated ? (
        <button
          onClick={() => onDelete(id)}
          className="p-2 bg-red-100 rounded-lg hover:bg-red-200 transition-colors ml-28 mt-4"
        >
          <Trash2 size={18} className="text-red-600" />
        </button>
      ) : null}
    </div>
  );
}
