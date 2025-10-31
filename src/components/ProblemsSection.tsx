import { Monitor, LayoutDashboard, Smartphone, Tablet } from "lucide-react";

const services = [
  {
    icon: <Monitor className="w-6 h-6 text-orange-500" />,
    title: "Desenvolvimento de sites",
    description:
      "Desenvolvemos dashboards, aplicativos e sites que encantam usuários e impulsionam resultados.",
  },
  {
    icon: <LayoutDashboard className="w-6 h-6 text-orange-500" />,
    title: "Desenvolvimento de dashboards",
    description:
      "Desenvolvemos dashboards, aplicativos e sites que encantam usuários e impulsionam resultados.",
  },
  {
    icon: <Smartphone className="w-6 h-6 text-orange-500" />,
    title: "Aplicativos para android",
    description:
      "Desenvolvemos dashboards, aplicativos e sites que encantam usuários e impulsionam resultados.",
  },
  {
    icon: <Tablet className="w-6 h-6 text-orange-500" />,
    title: "Aplicativos para iOS",
    description:
      "Desenvolvemos dashboards, aplicativos e sites que encantam usuários e impulsionam resultados.",
  },
];

export default function ProblemsSection() {
  return (
    <section className="w-full bg-black text-white py-20">
      <div className=" mx-auto text-center md:px-32 sm:px-24 lg:px-5">
        {/* Subtítulo */}
        <h3 className="inline-block border border-orange-600/40 bg-black px-3 py-1 text-xs text-[#FF6633] rounded-sm mb-3">
          O que fazemos
        </h3>

        {/* Título principal */}
        <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
          Empresa especializada em <br />
          desenvolvimento web e mobile
        </h2>

        {/* Descrição */}
        <p className="text-gray-300 max-w-2xl mx-auto mb-12 text-sm md:text-base">
          Desenvolvemos dashboards, aplicativos e sites que encantam usuários e
          impulsionam resultados.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 justify-items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-start gap-3 max-w-xs text-left"
            >
              <div className="bg-orange-500/10 p-2 rounded-md flex-shrink-0">
                {service.icon}
              </div>
              <div>
                <h4 className="font-semibold text-white text-sm mb-1">
                  {service.title}
                </h4>
                <p className="text-gray-400 text-sm leading-snug">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 mt-20"></div>
    </section>
  );
}
