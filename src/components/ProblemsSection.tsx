import React from "react";
import img1 from "../images/problema.jpg";
import img2 from "../images/solutcao.jpg";
import img3 from "../images/Sistemas Web _ Sites _ Mobile.jpg";

const ProblemsSection: React.FC = () => {
  return (
    <section className="w-full py-14">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* título */}
        <div className="text-center mb-8">
          <div className="inline-block mb-4">
            <span className="text-xs text-yellow-500 bg-yellow-300/10 border border-yellow-600/25 px-5 py-1 rounded-sm">
              Problemas
            </span>
          </div>

          <h2 className="text-[25px] md:text-[50px] font-normal text-white leading-none">
            Sua empresa sofre com esses{" "}
            <span className="text-yellow-400">
              problemas<span className="text-white">?</span>
            </span>
          </h2>

          <p className="mt-3 text-gray-400 text-sm md:max-w-3xl mx-auto">
            Gargalos internos que travam sua evolução e abrem espaço para a
            concorrência avançar
          </p>
        </div>

        {/* grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mt-10">
          {/* Card 1 */}
          <div className="flex flex-col items-center bg-[#0c0e17] overflow-hidden border border-black">
            <img
              src={img1}
              alt="Tem backlog acumulado"
              className="w-full object-cover"
            />
            <div className="p-5 text-left">
              <h3 className="text-lg font-semibold mb-2">
                Tem backlog acumulado
              </h3>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center bg-[#0c0e17] overflow-hidden border border-black">
            <img src={img2} alt="Branding" className="w-full object-cover" />
            <div className="p-6 text-left">
              <h3 className="text-lg font-semibold mb-2">
                Lentidão ao desenvolver novas funcionalidades
              </h3>
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
              <h3 className="text-lg font-semibold mb-2">
                O produto parece um eterno MVP sem diferencial
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* grid border decor (linhas finas em volta como na imagem) */}
      <div className="pointer-events-none">
        <div className="max-w-full mx-auto px-6">
          <div className="mt-24 border-t border-white/10" />
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
