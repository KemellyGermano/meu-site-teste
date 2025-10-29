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

  return (
    <>
      <header className="fixed top-0 left-0 w-full flex justify-between items-center px-5 sm:px-6 md:px-16 lg:px-32 py-4 sm:py-6 md:py-8 lg:py-8 border-b border-white/10 z-50 bg-black">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-yellow-400 text-black font-bold w-6 h-6 flex items-center justify-center rounded">
            ⚡
          </div>
          <span className="font-semibold text-lg">Fronthor</span>
        </div>

        {/* Links desktop */}
        <nav className="hidden lg:flex gap-5 text-[14px] font-medium text-gray-300">
          <a
            href="#"
            className="hover:-translate-y-1 transition-transform duration-200"
          >
            Por que nós
          </a>
          <a
            href="#"
            className="hover:-translate-y-1 transition-transform duration-200"
          >
            Nosso processo
          </a>
          <a
            href="#"
            className="hover:-translate-y-1 transition-transform duration-200"
          >
            Cases
          </a>
          <a
            href="#"
            className="hover:-translate-y-1 transition-transform duration-200"
          >
            Depoimentos
          </a>
        </nav>

        {/* Botão desktop */}
        <button className="hidden lg:block bg-gradient-to-tr from-[#fec338] to-[#fed165] text-black font-semibold px-4 py-3 rounded-xl hover:bg-yellow-300 transition text-sm border border-white/55">
          Começar um projeto
        </button>

        {/* Menu hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white text-2xl"
        >
          <Menu size={28} />
        </button>

        {/* Menu dropdown */}
        {open && (
          <div
            ref={dropdownRef}
            className="bg-black absolute top-14 right-4 border border-white/10 rounded-lg shadow-lg p-4 pr-14 flex flex-col gap-4 text-[16px] font-normal text-gray-200 lg:hidden"
          >
            <a href="#">Por que nós</a>
            <a href="#">Nosso processo</a>
            <a href="#">Cases</a>
            <a href="#">Depoimentos</a>
          </div>
        )}
      </header>
    </>
  );
}
