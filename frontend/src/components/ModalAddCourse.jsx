import React from "react";

const ModalAddCourse = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      { }
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      />

      { }
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-[90vw] max-w-[571px] animate-scaleIn">
        <div className="flex flex-col gap-5 bg-white rounded-xl p-5 sm:p-6 shadow-2xl border border-gray-100 max-h-[90vh] overflow-y-auto">
          { }
          <header className="flex items-center justify-between sticky top-0 bg-white py-1">
            <h1 className="font-bold text-xl sm:text-2xl text-gray-800">Adicionar Novo Curso</h1>
            <button
              onClick={onClose}
              className="text-2xl font-bold text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Fechar modal"
            >
              &times;
            </button>
          </header>

          { }
          <form className="flex flex-col gap-4">
            <div className="space-y-1">
              <label className="block text-base sm:text-lg font-medium text-gray-700">Título</label>
              <input
                type="text"
                placeholder="Ex: Canto Popular"
                className="w-full py-2.5 px-4 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-base sm:text-lg font-medium text-gray-700">Mini descrição</label>
              <input
                type="text"
                placeholder="Ex: Aprenda técnicas vocais..."
                className="w-full py-2.5 px-4 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-base sm:text-lg font-medium text-gray-700">Professor(a)</label>
              <input
                type="text"
                placeholder="Ex: Antonia Francisca"
                className="w-full py-2.5 px-4 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-base sm:text-lg font-medium text-gray-700">Turma</label>
              <input
                type="text"
                placeholder="Ex: Segunda e Quarta, 14h-15h30"
                className="w-full py-2.5 px-4 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-base sm:text-lg font-medium text-gray-700">Nível</label>
              <input
                type="text"
                placeholder="Ex: Iniciante, Intermediário"
                className="w-full py-2.5 px-4 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
              />
            </div>

            { }
            <button
              type="submit"
              className="mt-3 px-6 py-3 bg-[#FF8A00] text-white rounded-lg font-bold hover:bg-[#E67A00] transition-colors shadow-md hover:shadow-lg active:scale-95 transform"
            >
              Salvar Curso
            </button>
          </form>
        </div>
      </div>

      { }
      <style jsx>{`
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes scaleIn {
                from { transform: translate(-50%, -50%) scale(0.95); opacity: 0; }
                to { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            }
            .animate-fadeIn {
                animation: fadeIn 0.2s ease-out forwards;
            }
            .animate-scaleIn {
                animation: scaleIn 0.2s ease-out forwards;
            }
        `}</style>
    </>
  );
};

export default ModalAddCourse;
