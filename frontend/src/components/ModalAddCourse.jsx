import React, { useState } from "react";

const Niveis = {
  INICIANTE: "Iniciante",
  BASICO: "Basico",
  INTERMEDIARIO: "Intermediario",
  AVANCADO: "Avançado",
};

const ModalAddCourse = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    teacher: "",
    description: "",
    num_places: "",
  });

  const [classes, setClasses] = useState([
    { horario: "", nivel: Niveis.INICIANTE },
  ]);

  const handleAddClass = () => {
    setClasses([...classes, { horario: "", nivel: Niveis.INICIANTE }]);
  };

  const handleRemoveClass = (index) => {
    setClasses(classes.filter((_, i) => i !== index));
  };

  const handleClassChange = (index, field, value) => {
    const updatedClasses = [...classes];
    updatedClasses[index][field] = value;
    setClasses(updatedClasses);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreateCourse = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.teacher ||
      !formData.description ||
      !formData.num_places ||
      classes.some((c) => !c.horario)
    ) {
      alert("Preencha todos os campos obrigatórios!");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/courses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          name: formData.name,
          teacher: formData.teacher,
          description: formData.description,
          num_places: Number(formData.num_places),
          classes,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Erro ao criar o curso");
      }

      alert("Curso criado com sucesso!");
      setFormData({
        name: "",
        teacher: "",
        description: "",
        num_places: "",
      });
      setClasses([{ horario: "", nivel: Niveis.INICIANTE }]);

      onClose();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm animate-fadeIn"
            onClick={onClose}
          />

          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-[90vw] max-w-[571px] animate-scaleIn">
            <div className="flex flex-col gap-5 bg-white rounded-xl p-5 sm:p-6 shadow-2xl border border-gray-100 max-h-[90vh] overflow-y-auto">
              <header className="flex items-center justify-between sticky top-0 bg-white py-1">
                <h1 className="font-bold text-xl sm:text-2xl text-gray-800">
                  Adicionar Novo Curso
                </h1>
                <button
                  onClick={onClose}
                  className="text-2xl font-bold text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label="Fechar modal"
                >
                  &times;
                </button>
              </header>

              <form
                className="flex flex-col gap-4"
                onSubmit={handleCreateCourse}
              >
                <div className="space-y-1">
                  <label className="block text-base sm:text-lg font-medium text-gray-700">
                    Título
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Canto Popular"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full py-2.5 px-4 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-base sm:text-lg font-medium text-gray-700">
                    Mini descrição
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Aprenda técnicas vocais..."
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full py-2.5 px-4 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-base sm:text-lg font-medium text-gray-700">
                    Professor(a)
                  </label>
                  <input
                    type="text"
                    name="teacher"
                    value={formData.teacher}
                    onChange={handleChange}
                    placeholder="Ex: Antonia Francisca"
                    className="w-full py-2.5 px-4 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-base sm:text-lg font-medium text-gray-700">
                    Número de vagas
                  </label>
                  <input
                    type="number"
                    name="num_places"
                    value={formData.num_places}
                    onChange={handleChange}
                    placeholder="Ex: 20"
                    className="w-full py-2.5 px-4 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-base sm:text-lg font-medium text-gray-700">
                    Turmas
                  </label>
                  {classes.map((classItem, index) => (
                    <div key={index} className="flex gap-2 items-center">
                      <input
                        type="text"
                        placeholder="Horário da turma"
                        value={classItem.horario}
                        onChange={(e) =>
                          handleClassChange(index, "horario", e.target.value)
                        }
                        className="w-full py-2.5 px-4 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
                      />
                      <select
                        value={classItem.nivel}
                        onChange={(e) =>
                          handleClassChange(index, "nivel", e.target.value)
                        }
                        className="py-2 px-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
                      >
                        {Object.values(Niveis).map((nivel) => (
                          <option key={nivel} value={nivel}>
                            {nivel}
                          </option>
                        ))}
                      </select>
                      {index > 0 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveClass(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          &times;
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={handleAddClass}
                    className="w-full py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-all"
                  >
                    + Adicionar Turma
                  </button>
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 bg-[#FF8A00] text-white rounded-lg font-bold hover:bg-[#E67A00] transition-colors shadow-md hover:shadow-lg active:scale-95 transform"
                >
                  Salvar Curso
                </button>
              </form>
            </div>
          </div>

          <style jsx>{`
            @keyframes fadeIn {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }
            @keyframes scaleIn {
              from {
                transform: translate(-50%, -50%) scale(0.95);
                opacity: 0;
              }
              to {
                transform: translate(-50%, -50%) scale(1);
                opacity: 1;
              }
            }
            .animate-fadeIn {
              animation: fadeIn 0.2s ease-out forwards;
            }
            .animate-scaleIn {
              animation: scaleIn 0.2s ease-out forwards;
            }
          `}</style>
        </>
      )}
    </>
  );
};

export default ModalAddCourse;
