import { useNavigate } from "react-router-dom";
import logo from "../assets/MUSICALIZAR.svg";
import { useScroll } from "../context/ScrollContext";

function Header() {
  const navigate = useNavigate();
  const { setScrollToId } = useScroll();

  const handleNavigation = (id) => {
    if (window.location.pathname !== "/") {
      setScrollToId(id);
      navigate("/");
    } else {
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-between h-36 px-4 py-4 flex-col lg:flex-row">
        <a href="/" className="flex items-center">
          <img src={logo} alt="Logo do Musicalizar" className="h-5" />
        </a>

        <nav>
          <ul className="flex gap-8 text-lg">
            <li>
              <button
                onClick={() => handleNavigation("about-us")}
                className="hover:text-stone-500 text-[16px]"
              >
                Conheça nós
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("courses")}
                className="hover:text-stone-500 text-[16px]"
              >
                Cursos
              </button>
            </li>
            <li>
              <a
                onClick={() => handleNavigation("contact")}
                className="hover:text-stone-500 text-[16px]"
              >
                Contato
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com.br/maps/?hl=pt-PT"
                target="_blank"
                className="hover:text-stone-500 text-[16px]"
              >
                Localização
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
