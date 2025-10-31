import problem1 from "../images/kNDTt2YYTYlNyNehulALtQS7sM.avif";
import problem2 from "../images/rLqJUpgrHQN7D4qjLlE00J0ETw.avif";
import problem3 from "../images/Símbolo do infinito com efeito brilhante _ Vetor Grátis.jpg";

export default function Problems() {
  const problems = [
    {
      id: 1,
      image: problem1,
      title: "Tem backlog acumulado",
    },
    {
      id: 2,
      image: problem2,
      title: "Lentidão ao desenvolver novas funcionalidades",
    },
    {
      id: 3,
      image: problem3,
      title: "O produto parece um eterno MVP sem diferencial",
    },
  ];

  return (
    <section
      id="problemas"
      className="w-full flex flex-col items-center text-center text-white py-24 border-t border-white/10"
    >
      {/* Tag */}
      <div className="inline-block border border-orange-600/40 bg-black px-3 py-1 text-xs text-[#FF6633] rounded-sm mb-6">
        <span>Problemas</span>
      </div>

      {/* Título */}
      <h2 className="text-4xl md:text-5xl font-normal leading-none mb-6">
        Sua empresa sofre com esses{" "}
        <span className="text-[#FF6633]">problemas?</span>
      </h2>

      <p className="text-gray-400 mb-16 max-w-3xl mx-auto">
        Gargalos internos que travam sua evolução e abrem espaço para a
        concorrência avançar.
      </p>

      {/* Grid de problemas */}
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl">
        {problems.map((problem, index) => (
          <div
            key={problem.id}
            className={`flex flex-col items-center bg-[#0c0e17] overflow-hidden border border-white/10 
              ${index === 0 ? "rounded-ss-lg" : ""}
              ${index === problems.length - 1 ? "rounded-ee-lg" : ""}`}
          >
            <img
              src={problem.image}
              alt={problem.title}
              className="w-full object-cover h-[260px]"
            />
            <div className="p-6 text-left">
              <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Linha separadora */}
      <div className="w-full border-t border-white/10 mt-28"></div>
    </section>
  );
}
