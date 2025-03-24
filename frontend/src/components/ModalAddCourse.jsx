import React from 'react';

const ModalAddCourse = ({ isOpen, onClose }) => {

    if (!isOpen) return null;

    return (
        <div className="lg:w-[571px] md:min-w-2xl w-[320px] flex flex-col gap-4 bg-white rounded-lg p-4 fixed z-50 shadow-lg  ">
            <header className=" flex items-center justify-between">
                <h1 className="font-bold text-xl">asda</h1>
                <button onClick={onClose} className="text-xl font-bold ">X</button>
            </header>

            <form action="" className="flex flex-col gap-2">
                <label htmlFor="" className="text-lg ">Titulo</label>
                <input type="text" placeholder="Canto" className="py-2.5 px-6 bg-gray-100 rounded-lg" />
                <label htmlFor="" className="text-lg ">Mini descrição</label>
                <input type="text" placeholder="Aprender cantar e tarara..." className="py-2.5 px-6 bg-gray-100 rounded-lg" />
                <label htmlFor="" className="text-lg ">Professor(a)</label>
                <input type="text" placeholder="Antonia Francisca" className="py-2.5 px-6 bg-gray-100 rounded-lg" />
                <label htmlFor="" className="text-lg ">Turma</label>
                <input type="text" placeholder="Dia e Horário. Ex. Seg e Ter 14h-15h30" className="py-2.5 px-6 bg-gray-100 rounded-lg" />
                <label htmlFor="" className="text-lg ">Nível</label>
                <input type="text" placeholder="Iniciante, Básico, Avançado" className="py-2.5 px-6 bg-gray-100 rounded-lg" />

                <button type="submit"
                    className="mt-4 px-4 py-2
                           bg-orange-400 text-white
                           rounded-lg font-bold"
                >
                    Salvar
                </button>
            </form>


        </div>

    );
};
export default ModalAddCourse;