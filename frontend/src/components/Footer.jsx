import React from "react";
import logo from "../assets/MUSICALIZAR.svg";
import { useNavigate } from "react-router-dom";
import { useScroll } from "../context/ScrollContext";

function Footer() {
  const navigate = useNavigate();
  const { setScrcollToId } = useScroll();

  const handleNavigation = (id) => {
    if (window.location.pathname !== "/") {
      setScrcollToId(id);
      navigate("/");
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };
  return (
    <footer className="bg-black-900 text-white max-h-24">
      <div className="container mx-auto bg-black flex flex-col lg:flex-row justify-around max-w-full p-4">
        <div className="text-center flex flex-col items-center m-2 justify-center">
          <img src={logo} alt="Logo do Musicalizar" className="h-5" />
          <p className="text-sm">Rua Felicia 100 - Centro - Ceará</p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-center space-x-8 flex-row">
            <a
              onClick={() => handleNavigation("about-us")}
              className=" text-gray-400 hover:text-white"
            >
              Conheça nós
            </a>
            <a
              onClick={() => handleNavigation("courses")}
              className="text-gray-400 hover:text-white"
            >
              Cursos
            </a>
            <a
              onClick={() => handleNavigation("contact")}
              className="text-gray-400 hover:text-white"
            >
              Contato
            </a>
          </div>
          <div className="text-center text-sm text-gray-400">
            <p className="text-size-10">
              Desenvolvido por Ana Lara, Carlyle, Diego e Lucivando
            </p>
          </div>
        </div>

        <div className="text-center font-semibold mt-2 cursor-pointer flex flex-col">
          <p onClick={() => navigate("/manager")}>Gerenciar</p>
          <p onClick={() => navigate("/")}>Página Inicial</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
