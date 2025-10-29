import project1 from "../images/4.jpg";
import project2 from "../images/3.jpg";
import project3 from "../images/2.jpg";
import project4 from "../images/1.jpg";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      image: project1,
      name: "pkFinance",
      description: "Plataforma de Pool e Staking",
      tags: ["UI/UX Design"],
    },
    {
      id: 2,
      image: project2,
      name: "AIWriters",
      description:
        "Plataforma web de IA para personalização de mensagens, roteiros e textos personalizados",
      tags: ["UI/UX Design", "Design System", "Framer Development"],
    },
    {
      id: 3,
      image: project3,
      name: "NovaPay",
      description:
        "Solução de pagamentos digitais com integração instantânea e segurança aprimorada",
      tags: ["Product Design", "Frontend", "Next.js"],
    },
    {
      id: 4,
      image: project4,
      name: "Growthly",
      description:
        "Dashboard analítica com foco em crescimento e métricas de retenção",
      tags: ["Dashboard", "UI/UX Design", "API Integration"],
    },
  ];

  return (
    <section className="w-full py-20 px-6 mt-20 border-t border-b border-white/10">
      {/* Cabeçalho */}
      <div className="max-w-6xl mx-auto text-center mb-10">
        <div className="inline-block border border-yellow-400/40 bg-yellow-300/10 px-3 py-1 text-sm text-yellow-400 rounded-sm mb-6">
          O que fazemos de melhor
        </div>

        <h2 className="text-4xl md:text-5xl font-semibold text-white">
          Projetos recentes
        </h2>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#0c0e17] rounded-2xl overflow-hidden border border-white/10 transition-all duration-500"
          >
            {/* Imagem */}
            <div className="aspect-[16/10] bg-[#0c0e17] overflow-hidden p-5">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover rounded-t-2xl transition-transform duration-700 hover:scale-105"
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

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs rounded-full border border-white/10 bg-white/5 text-gray-300 transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
