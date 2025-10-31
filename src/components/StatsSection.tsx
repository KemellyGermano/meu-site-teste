import React, { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 5,
    suffix: "+",
    label: "Anos de experiência criando soluções digitais com propósito",
  },
  {
    value: 40,
    suffix: "+",
    label: "Projetos entregues com excelência para startups SaaS",
  },
  {
    value: 30,
    suffix: "%",
    label: "Menos tempo de desenvolvimento com Design Systems reutilizáveis",
  },
];

const StatsSection: React.FC = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // roda só uma vez
        }
      },
      { threshold: 0.3 } // quando 30% da seção estiver visível
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    const duration = 1000;
    const frameRate = 20;
    const totalFrames = duration / frameRate;

    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((count, i) => {
          const target = stats[i].value;
          const increment = target / totalFrames;
          if (count < target) {
            const newCount = Math.min(count + increment, target);
            return parseFloat(newCount.toFixed(1));
          }
          return target;
        })
      );
    }, frameRate);

    return () => clearInterval(interval);
  }, [visible]);

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 px-6 flex flex-col items-center text-center"
    >
      {/* Título pequeno */}
      <div className="text-yellow-400 text-sm font-medium bg-yellow-300/10 border border-yellow-400/40 px-3 py-1 rounded-sm inline-block mb-6">
        Nossos números falam por si
      </div>

      {/* Título principal */}
      <h2 className="text-4xl md:text-5xl font-semibold mb-4">
        Experiência, eficiência <br /> e entrega de verdade
      </h2>

      <p className="text-gray-400 max-w-2xl mb-16">
        Mais do que métricas de vaidade, são resultados sólidos que mostram como
        transformamos ideias em produtos escaláveis, com velocidade e qualidade.
      </p>

      {/* Cards de números */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 border-t border-white/10">
        {stats.map((stat, index) => (
          <div key={index} className="border border-white/10 py-12 px-8">
            <h3 className="text-5xl font-semibold text-yellow-400 mb-4">
              {stat.suffix === "%"
                ? `${Math.floor(counts[index])}%`
                : `+${Math.floor(counts[index])}`}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
