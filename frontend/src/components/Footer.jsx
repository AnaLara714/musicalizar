import React from "react";
import logo from "../assets/MUSICALIZAR.svg";

function Footer () {
    return (
        <footer className="bg-black-900 text-white max-h-24">
            <div className="container mx-auto bg-black mb-8 flex flex-row justify-around max-w-full p-4">
                <div className="text-center mb-6 items-center flex flex-col">
                    <img src={logo} alt="Logo do Musicalizar" className="h-5" />
                    <p className="text-sm">Rua Felicia 100 - Centro - Ceará</p>
                </div>

                <div className="flex flex-col">
                    <div className="flex justify-center space-x-8 mb-6 flex-row" >
                        <a href="#conheca" className=" text-gray-400 hover:text-white">Conheça nós</a>
                        <a href="#cursos" className="text-gray-400 hover:text-white">Cursos</a>
                        <a href="#contato" className="text-gray-400 hover:text-white">Contato</a>
                        <a href="#localizacao" className="text-gray-400 hover:text-white">Localização</a>
                    </div>
                    <div className="text-center text-sm text-gray-400" >
                        <p className="text-size-10">Desenvolvido por Ana Lara, Carlyle, Diego e Lucivando</p>
                    </div>
                </div>

                <div className="text-center font-semibold ">
                    <p>Gerenciar</p>
                </div>


            </div>
        </footer>
    )
}

export default Footer
