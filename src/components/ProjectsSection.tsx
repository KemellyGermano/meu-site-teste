import project1 from "../images/Projects/LosamoApp.png";
import project2 from "../images/Projects/LosamoPay.png";
import project3 from "../images/Projects/Losamo1.png";
import project4 from "../images/Projects/Dom.png";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      image: project1,
      name: "Losamo",
      description:
        "Desenvolvemos dashboards, aplicativos e sites que encantam usuários e impulsionam resultados.",
    },
    {
      id: 2,
      image: project2,
      name: "Losamo Drive",
      description:
        "Desenvolvemos dashboards, aplicativos e sites que encantam usuários e impulsionam resultados.",
    },
    {
      id: 3,
      image: project3,
      name: "Losamo Dashboard",
      description:
        "Desenvolvemos dashboards, aplicativos e sites que encantam usuários e impulsionam resultados.",
    },
    {
      id: 4,
      image: project4,
      name: "Dom Pagamentos",
      description:
        "Desenvolvemos dashboards, aplicativos e sites que encantam usuários e impulsionam resultados.",
    },
  ];

  return (
    <section className="w-full py-20 mt-20 border-t border-b border-white/10">
      {/* Cabeçalho */}
      <div className="max-w-6xl mx-auto text-center mb-10">
        <div className="inline-block border border-orange-600/40 bg-black px-3 py-1 text-xs text-[#FF6633] rounded-sm mb-3">
          Cases
        </div>

        <h2 className="text-4xl md:text-5xl font-semibold text-white">
          Projetos recentes
        </h2>
        <p className="text-[16px] mt-5">
          Desenvolvemos dashboards, aplicativos e sites que encantam usuários e{" "}
          <br />
          impulsionam resultados.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#002038] rounded-2xl overflow-hidden border border-white/10 transition-all duration-500"
          >
            {/* Imagem */}
            <div className="aspect-[18/10] p-4 bg-[#002038] overflow-hidden flex items-center justify-center">
              <img
                src={project.image}
                alt={project.name}
                className="max-w-full max-h-full object-contain rounded-xl transition-all duration-700 hover:scale-105 shadow-[0_0_40px_rgba(0,0,0,0.4)] hover:shadow-[0_0_60px_rgba(0,0,0,0.6)]"
              />
            </div>

            {/* Conteúdo */}
            <div className="p-6 flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-white">
                {project.name}
              </h3>
              <p className="text-gray-400 text-sm mb-3">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
