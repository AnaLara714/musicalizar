import React from "react";
import Card from "./Card";
import { IoIosArrowDown } from "react-icons/io";
import { Trash2, Edit, Plus, Maximize2 } from "lucide-react";
import ModalAddCourse from "./ModalAddCourse";


const Manager = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  return (
    <div className="min-h-screen bg-[#7FE7FF] p-4 sm:p-6 md:p-8 lg:px-12 xl:px-40 max-w-[1400px] mx-auto">
      { }
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 md:mb-8 gap-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-nerko">Olá, gerencie a Musicalizar</h1>
      </div>

      { }
      <div className="flex flex-col lg:flex-row justify-between items-stretch gap-4 mb-6 md:mb-8">
        <div className="w-full lg:w-auto">

          <Card className="h-full">
            <div className='flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8 '>
              <span className="text-black text-lg sm:text-xl font-medium">Inscrições</span>
              <div className="relative w-full sm:w-auto min-w-[200px]">
                <select className="w-full appearance-none bg-[#E4E4E4] py-2 pl-4 pr-8 rounded-lg border border-gray-300 text-sm sm:text-base">
                  <option>Ativas</option>
                  <option>Inativas</option>
                </select>
                <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <Card className="w-full lg:w-auto">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center gap-2 p-4 w-full">
            <Plus size={20} />
            <span className="text-sm sm:text-base">Criar cursos</span>
          </button>
        </Card>
      </div>

      <ModalAddCourse
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      { }
      <h2 className="text-xl sm:text-2xl md:text-3xl font-nerko pb-4">Cursos</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {[1, 2, 3].map((index) => (
          <Card key={index}>
            <div clasName="p-2 space-y-4">
              { }
              <div className="bg-[#FF8A00] h-32 sm:h-40 md:h-44 rounded-lg"></div>

              { }
              <div className="space-y-3">
                <h3 className="text-lg sm:text-xl font-bold">Guitarra Elétrica</h3>
                <p className="text-gray-600 text-sm sm:text-base">Professor Tal</p>
                <p className="text-gray-600 text-sm sm:text-base">Mini descrição</p>
                <p className="text-gray-600 text-sm sm:text-base">10 vagas</p>

                { }
                <div className="space-y-2">
                  <p className="text-xs sm:text-sm border-b-2 border-red-700 pb-1 font-bold">
                    Turma 1: Seg. e Qua. 18h - 19h30
                  </p>
                  <p className="text-xs sm:text-sm border-b-2 border-red-700 pb-1 font-bold">
                    Turma 2: Ter. e Qui. 18h - 19h30
                  </p>
                </div>

                { }
                <div className="flex justify-center gap-4 sm:gap-6 pt-2">
                  <button className="p-2 bg-red-100 rounded-lg hover:bg-red-200 transition-colors">
                    <Trash2 size={18} className="text-red-600" />
                  </button>
                  <button className="p-2 bg-green-100 rounded-lg hover:bg-green-200 transition-colors">
                    <Maximize2 size={18} className="text-green-600" />
                  </button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Manager;
