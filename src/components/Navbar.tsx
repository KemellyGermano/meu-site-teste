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
        <img
          src="/images/logo-kejota-larger-1.png"
          alt="Logo kejota"
          className="w-[125px] h-auto object-contain sm:w-[140px] md:w-[160px] lg:w-[180px] transition-all duration-300"
        />

        {/* Links desktop */}
        <nav className="hidden lg:flex gap-5 text-[14px] font-medium text-white">
          <a
            href="#"
            className="hover:-translate-y-1 transition-transform duration-200"
          >
            O que fazemos
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
            Parceiros
          </a>
        </nav>
        {/* Botão desktop */}
        <button className="hidden lg:block bg-[#FF6633] text-[#FFFFFF] font-semibold px-7 py-2 rounded-full transition text-[13px]">
          Fale conosco
        </button>
        {/* Menu hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white text-2xl mr-2"
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
