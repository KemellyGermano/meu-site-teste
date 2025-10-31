import React from "react";

import img1 from "../images/EOUJ4pazGCU7aDmIqmXtps2Lw0w.avif";
import img2 from "../images/mow57LsouT7GqjYQQF2Zu9xqUM.avif";
import img3 from "../images/UTPamx2A748SgjsVRxRqHho.avif";

const SolutionsSection: React.FC = () => {
  return (
    <section
      id="solucoes"
      className="w-full flex flex-col items-center text-center text-white"
    >
      {/* Tag */}
      <div className="inline-block border border-orange-600/40 bg-black px-3  py-1 text-xs text-[#FF6633] rounded-sm mb-6">
        <span className="">Solução</span>
      </div>

      {/* Título */}
      <h2 className="text-4xl md:text-5xl font-normal leading-none mb-6">
        A Fronthor tem <span className="text-[#FF6633]">soluções</span> para o
        seu negócio
      </h2>

      {/* Grid de soluções */}
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mt-10">
        {/* Card 1 */}
        <div className="flex flex-col items-center bg-[#0c0e17] overflow-hidden border border-white/10 rounded-ss-lg">
          <img src={img1} alt="UI/UX Design" className="w-full object-cover" />
          <div className="p-6 text-left">
            <h3 className="text-lg font-semibold mb-2">UI/UX Design</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Design de alto nível focado em experiência de usuário e resultados
              de negócios
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center bg-[#0c0e17] overflow-hidden border border-white/10">
          <img src={img2} alt="Branding" className="w-full object-cover" />
          <div className="p-6 text-left">
            <h3 className="text-lg font-semibold mb-2">Branding</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Construímos marcas que refletem o valor da sua marca e diferenciam
              no mercado
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center bg-[#0c0e17] overflow-hidden border border-white/10 rounded-ee-lg">
          <img
            src={img3}
            alt="Desenvolvimento"
            className="w-full object-cover"
          />
          <div className="p-6 text-left">
            <h3 className="text-lg font-semibold mb-2">Desenvolvimento</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Especialistas em criação de projetos ágeis e escaláveis
            </p>
          </div>
        </div>
      </div>

      {/* Linha separadora */}
      <div className="w-full border-t border-white/10 mt-28 self-stretch"></div>
    </section>
  );
};

export default SolutionsSection;
