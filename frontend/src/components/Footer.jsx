import React from "react";
import logo from "../assets/MUSICALIZAR.svg";
import { useNavigate } from "react-router-dom";
import { useScroll } from "../context/ScrollContext";

export default function Footer() {
  const navigate = useNavigate();
  const { setScrollToId } = useScroll();

  const handleNavigation = (id) => {
    if (window.location.pathname !== "/") {
      setScrollToId(id);
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
          <a
            href="https://www.google.com.br/maps/?hl=pt-PT"
            target="_blank"
            className="hover:text-stone-500 text-[16px]"
          >
            <p className="text-sm">Rua Felicia 100 - Centro - Ceará</p>
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-center space-x-8 flex-row">
            <button
              onClick={() => handleNavigation("about-us")}
              className=" text-gray-400 hover:text-white"
            >
              Conheça nós
            </button>
            <button
              onClick={() => handleNavigation("courses")}
              className="text-gray-400 hover:text-white"
            >
              Cursos
            </button>
            <button
              onClick={() => handleNavigation("contact")}
              className="text-gray-400 hover:text-white"
            >
              Contato
            </button>
          </div>
          <div className="text-center text-sm text-gray-400">
            <p className="text-size-10">
              Desenvolvido por{" "}
              <a
                href="https://github.com/AnaLara714"
                target="_blank"
                className="hover:text-cyan-200 text-[16px]"
              >
                Ana Lara
              </a>
              ,{" "}
              <a
                href="https://github.com/CroyzCamel"
                target="_blank"
                className="hover:text-cyan-200 text-[16px]"
              >
                Carlyle
              </a>
              ,{" "}
              <a
                href="https://github.com/diegofer70"
                target="_blank"
                className="hover:text-cyan-200 text-[16px]"
              >
                Diego{" "}
              </a>
              e{" "}
              <a
                href="https://github.com/lucivandosousa"
                target="_blank"
                className="hover:text-cyan-200 text-[16px]"
              >
                Lucivando
              </a>
            </p>
          </div>
        </div>

        <div className="text-center font-semibold mt-2 cursor-pointer">
          <p onClick={() => navigate("/manager")}>Gerenciar</p>
          <p onClick={() => navigate("/")}>Página Inicial</p>
        </div>
      </div>
    </footer>
  );
}
