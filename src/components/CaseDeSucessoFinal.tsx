import { Instagram, Linkedin, Mail } from "lucide-react";

export default function CaseDeSucessoFinal() {
  return (
    <footer className="w-full text-white mt-16">
      {/* ==== SEÇÃO: Quer ser mais um case de sucesso ==== */}
      <section className="relative max-w-5xl mx-auto text-center py-24 px-6 md:px-10 rounded-2xl overflow-hidden">
        {/* BRILHO vindo de cima */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-[#002038] to-transparent blur-3xl" />

        {/* LINHAS DIAGONAIS DE FUNDO */}
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(135deg,#ffffff_1px,transparent_1px)] bg-[length:20px_20px]" />

        {/* CONTEÚDO */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4">
            Quer ser mais um case de sucesso?
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-7 leading-relaxed">
            Converse com a gente e descubra o melhor caminho para lançar,
            evoluir ou escalar seu produto digital
          </p>

          {/* BOTÕES */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full max-w-2xl mx-auto">
            <button className="w-full md:w-[250px] bg-[#008CFF] text-white font-medium py-5 px-10 rounded-xl">
              Começar um projeto
            </button>

            <button className="w-full md:w-[250px] bg-[#FF6633] border border-[#2C2C34] text-white py-5 rounded-xl font-medium transition-all">
              Agendar consultoria gratuita
            </button>
          </div>
        </div>

        {/* LINHAS AO REDOR */}
        <div className="absolute inset-0 border border-[#1C1C22] pointer-events-none rounded-2xl"></div>
      </section>

      {/* ==== FOOTER FINAL ==== */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
        {/* Coluna 1 - Logo */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <img
              src="/images/logo-kejota-larger-1.png"
              alt="Fronthor"
              className="w-[125px] h-auto object-contain sm:w-[140px] md:w-[160px] lg:w-[180px] transition-all duration-300"
            />
          </div>
          <p className="text-sm text-gray-400">
            Kejota Code © 2025 <br /> Todos os direitos reservados
          </p>
        </div>

        {/* Coluna 2 - Redes sociais */}
        <div>
          <h4 className="text-base font-medium mb-4">Redes sociais</h4>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="flex items-center gap-2 hover:text-[#008CFF] transition-colors"
            >
              <Instagram className="w-4 h-4 text-[#FF6633]" />
              Instagram
            </a>
            <a
              href="#"
              className="flex items-center gap-2 hover:text-[#008CFF] transition-colors"
            >
              <Linkedin className="w-4 h-4 text-[#FF6633]" />
              LinkedIn
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            Desenvolvido por <span className="text-[#FF6633]">Kejota</span>
          </p>
        </div>

        {/* Coluna 3 - Contato */}
        <div>
          <h4 className="text-base font-medium mb-4">Contato</h4>
          <a
            href="mailto:marcos@fronthor.com"
            className="flex items-center gap-2 hover:text-[#008CFF] transition-colors"
          >
            <Mail className="w-4 h-4 text-[#FF6633]" />
            Kenero@Kejota.com
          </a>
          <p
            className="text-sm text-[#FF6633] mt-6 flex items-center gap-1 cursor-pointer hover:underline"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            ↑ Voltar ao topo
          </p>
        </div>
      </div>

      {/* ==== TEXTO GIGANTE TRANSLÚCIDO ==== */}
      <div className="relative border-t border-[#1C1C22] mt-20 h-[40vh] md:h-[30vh] overflow-hidden">
        {/* Texto gigante translúcido */}
        <h1
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                 text-[20vw] md:text-[14vw] font-bold text-[#252a3f] 
                 select-none pointer-events-none whitespace-nowrap"
        >
          Kejota
        </h1>

        {/* Overlay para escurecer o fundo */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0B0F]/90 to-[#0B0B0F]" />
      </div>
    </footer>
  );
}
