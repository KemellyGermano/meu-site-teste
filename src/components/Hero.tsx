export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center h-[65vh] sm:h-[95vh] overflow-hidden px-4 sm:px-6">
      {/* Fundo preto + brilhos ajustados para responsividade */}
      <div className="absolute inset-0 bg-[#000000]">
        {/* brilho laranja */}
        <div
          className="
            absolute left-[10%] top-[40%] 
            w-[150%] h-[120%] 
            sm:right-[20%] sm:top-[45%] sm:w-[50%] sm:h-[60%] 
            bg-[radial-gradient(circle,rgba(255,94,0,0.6)_0%,rgba(255,94,0,0.2)_40%,transparent_80%)] 
            blur-[100px] sm:blur-[160px] mix-blend-screen
          "
        />

        {/* brilho azul */}
        <div
          className="
            absolute left-[-40%] bottom-[-10%] 
            w-[160%] h-[120%] 
            sm:left-auto sm:right-[0%] sm:top-[45%] sm:w-[50%] sm:h-[60%] 
            bg-[radial-gradient(circle,rgba(0,102,255,0.6)_0%,rgba(0,102,255,0.2)_40%,transparent_80%)] 
            blur-[100px] sm:blur-[160px] mix-blend-screen
          "
        />
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 flex flex-col items-center justify-center mt-12 sm:mt-14 py-6 sm:py-10 md:py-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-snug sm:leading-tight text-white max-w-full sm:max-w-3xl px-2">
          Construindo o <span className="text-[#FF6633]">Futuro</span>{" "}
          <span className="text-[#008CFF]">Digital</span> do Seu Negócio
        </h1>

        <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-full sm:max-w-2xl mt-3 sm:mt-5 px-2">
          Desenvolvemos dashboards, aplicativos e sites que encantam usuários e
          impulsionam resultados.
        </p>

        <button className="mt-6 sm:mt-8 md:mt-10 bg-gradient-to-r from-blue-900 via-blue-500 to-[#FF6633] text-white font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-xl text-base sm:text-lg shadow-[0_0_30px_rgba(255,120,0,0.3)] hover:scale-105 transition-transform duration-300">
          Começar um projeto
        </button>
      </div>
    </section>
  );
}
