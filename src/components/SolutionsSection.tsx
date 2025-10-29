import React from "react";

import img1 from "../images/WordPress Profissionais Qualificados Social Media PSD Editável.jpg";
import img2 from "../images/branding.jpg";
import img3 from "../images/desenvol.jpg";

const SolutionsSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center text-center text-white">
      {/* Tag */}
      <div className="text-xs text-yellow-500 bg-yellow-300/10 border border-yellow-600/25 px-5 py-1 rounded-sm inline-block mb-4">
        <span className="">Solução</span>
      </div>

      {/* Título */}
      <h2 className="text-[25px] font-normal leading-none">
        A Fronthor tem <span className="text-yellow-400">soluções</span> para o
        seu negócio
      </h2>

      {/* Grid de soluções */}
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mt-10 mb-20 px-5">
        {/* Card 1 */}
        <div className="flex flex-col items-center bg-[#0c0e17] overflow-hidden border border-black">
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
        <div className="flex flex-col items-center bg-[#0c0e17] overflow-hidden border border-black">
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
        <div className="flex flex-col items-center bg-[#0c0e17] overflow-hidden border border-black">
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
    </section>
  );
};

export default SolutionsSection;
