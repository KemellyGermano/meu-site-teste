import { useState, useRef, useEffect } from "react";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fecha o menu ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Função para rolar suavemente até a seção
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // Fecha o menu mobile após clicar
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 gap-5 sm:px-8 md:px-16 lg:px-40 py-5 border-b border-white/10 z-50 bg-black">
      {/* Logo */}
      <img
        src="/images/logo-kejota-larger-1.png"
        alt="Logo kejota"
        className="w-[130px] sm:w-[150px] md:w-[160px] lg:w-[180px] h-auto object-contain transition-all duration-300"
      />

      {/* Links desktop */}
      <nav className="hidden lg:flex gap-8 text-[15px] font-medium text-white">
        <button
          onClick={() => scrollToSection("solucoes")}
          className="hover:-translate-y-1 transition-transform duration-200"
        >
          Por que nós
        </button>
        <button
          onClick={() => scrollToSection("nossos-numeros")}
          className="hover:-translate-y-1 transition-transform duration-200"
        >
          Nosso processo
        </button>
        <button
          onClick={() => scrollToSection("cases")}
          className="hover:-translate-y-1 transition-transform duration-200"
        >
          Cases
        </button>
        <button
          onClick={() => scrollToSection("depoimentos")}
          className="hover:-translate-y-1 transition-transform duration-200"
        >
          Depoimentos
        </button>
      </nav>

      {/* Botão desktop */}
      <button className="hidden lg:block bg-[#FF6633] text-[#FFFFFF] font-semibold px-7 py-2 rounded-full transition text-[13px] hover:opacity-90">
        Fale conosco
      </button>

      {/* Menu hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden text-white text-2xl mr-2"
      >
        <Menu size={28} />
      </button>

      {/* Menu dropdown (mobile) */}
      {open && (
        <div
          ref={dropdownRef}
          className="bg-black absolute top-16 right-4 border border-white/10 rounded-lg shadow-lg p-5 flex flex-col gap-4 text-[16px] font-normal text-gray-200 lg:hidden"
        >
          <button onClick={() => scrollToSection("solucoes")}>
            Por que nós
          </button>
          <button onClick={() => scrollToSection("nossos-numeros")}>
            Nosso processo
          </button>
          <button onClick={() => scrollToSection("cases")}>Cases</button>
          <button onClick={() => scrollToSection("depoimentos")}>
            Depoimentos
          </button>
        </div>
      )}
    </header>
  );
}
