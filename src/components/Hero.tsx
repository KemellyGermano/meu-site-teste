import { Figma, Atom } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-16 lg:px-32 py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden border-b border-white/10 z-0">
      {/* Gradiente de fundo cobrindo toda a seção */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#21170f] to-[#9C7E38] -z-10"></div>

      {/* Título Desktop */}
      <div className="pt-28 hidden md:block">
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-normal leading-9 max-w-full md:max-w-4xl p-3 text-center">
          Design{" "}
          <Figma className="inline text-pink-400 mx-1 sm:mx-2 w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 align-middle" />{" "}
          e Desenvolvimento{" "}
          <Atom className="inline text-sky-400 mx-1 sm:mx-2 w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 align-middle" />
          <br />
          <span className="text-yellow-200">de produtos de Ponta a Ponta</span>
        </h1>
      </div>

      {/* Título Mobile */}
      <div className="pt-6 block md:hidden">
        <h1 className="text-4xl font-normal leading-snug max-w-full sm:text-5xl md:text-4xl text-center">
          Design e<br />
          Desenvolvimento
          <br />
          <span className="text-yellow-200">
            de produtos de <br /> Ponta a Ponta
          </span>
        </h1>
      </div>

      {/* Texto */}
      <p className="text-gray-300 max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl px-5 mt-2 text-center">
        Tenha squads de design e desenvolvimento trabalhando junto com seu time
        para criar produtos que se destacam no mercado.
      </p>

      {/* Botão */}
      <button className="mt-6 sm:mt-8 md:mt-10 bg-gradient-to-tr from-[#fec338] to-[#fed165] text-black font-semibold px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-4 rounded-xl text-sm sm:text-base md:text-lg lg:text-xl border border-white/55 hover:scale-105 transition-transform duration-300">
        Começar um projeto
      </button>
    </section>
  );
}
