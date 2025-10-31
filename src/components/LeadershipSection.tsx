import lider1 from "../images/leaders/Kenero.png";
import lider2 from "../images/leaders/Mateus.png";
import lider3 from "../images/leaders/Miguel.png";

const leaders = [
  {
    name: "Kenero Germano",
    role: "CEO / Desenvolvedor Full-Stack",
    image: lider1,
    roleColor: "text-orange-500",
  },
  {
    name: "Tarcio Silva",
    role: "Desenvolvedor Full-Stack",
    roleColor: "text-orange-500",
  },
  {
    name: "Carlos Miguel",
    role: "Desenvolvedor Full-Stack",
    image: lider3,
    roleColor: "text-orange-500",
  },
  {
    name: "Mateus Alves",
    role: "Gerente de Produto",
    image: lider2,
    roleColor: "text-orange-400",
  },
];

export default function LeadershipSection() {
  return (
    <section className="w-full bg-[#050B10] text-white py-24">
      <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* === Texto à esquerda === */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
            Conheça nossa <br /> liderança
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md">
            Desenvolvemos dashboards, aplicativos e sites que encantam usuários
            e impulsionam resultados.
          </p>
        </div>

        {/* === Lista de líderes à direita === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {leaders.map((leader, index) => (
            <div key={index} className="flex items-center gap-3">
              {leader.image && (
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
              )}
              <div>
                <p className="font-semibold text-white text-sm">
                  {leader.name}
                </p>
                <p className={`${leader.roleColor} text-sm`}>{leader.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
