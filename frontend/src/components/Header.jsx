import { Link } from "react-router";
import logo from "../assets/MUSICALIZAR.svg";

function Header() {
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-between h-36 px-4 py-4 flex-col lg:flex-row">

        <a href="/" className="flex items-center">
          <img src={logo} alt="Logo do Musicalizar" className="h-5" />
        </a>

        <nav>
          <ul className="flex gap-8 text-lg">
            <li><a href="#conheça-nos" className="hover:text-stone-500 text-[16px]">Conheça nós</a></li>
            <li className="hover:text-stone-500 text-[16px]"><a href="#cursos">Cursos</a></li>
            <li className="hover:text-stone-500 text-[16px]"><a href="#contato">Contato</a></li>
            <li><a href="#localização" className="hover:text-stone-500 text-[16px]">Localização</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
