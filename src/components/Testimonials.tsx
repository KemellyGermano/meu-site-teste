import React, { useRef, useEffect } from "react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "O design criado pela Fronthor não só trouxe consistência visual, como acelerou nosso desenvolvimento e reduziu retrabalho. Foi uma das melhores escolhas para nosso time de desenvolvimento.",
    name: "Matheus Sevilha",
    role: "Desenvolvedor Backend",
  },
  {
    quote:
      "Meu projeto precisava de uma interface urgente e a Fronthor resolveu tudo com uma qualidade absurda. Design bonito e funcional. Salvou meu tempo e entregou mais do que eu esperava!",
    name: "Fabrício Júnior",
    role: "Desenvolvedor Frontend",
  },
  {
    quote:
      "Ver o impacto da Luar no desenvolvimento realmente apoia pais e professores. As particularidades de cada criança são respeitadas, tornando a aprendizagem acolhedora e eficaz.",
    name: "Kuesley Fernandes",
    role: "CEO Luar",
  },
];

const duplicated = [...testimonials, ...testimonials];

const Testimonials: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollAmount = 0;
    const speed = 0.5;
    let frame: number;

    const animate = () => {
      if (!carousel) return;

      scrollAmount += speed;
      if (scrollAmount >= carousel.scrollWidth / 2) scrollAmount = 0;

      carousel.scrollLeft = scrollAmount;
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="text-white py-20 border-t border-b border-white/10 overflow-hidden px-5">
      {/* Cabeçalho */}
      <div className="text-center mb-16">
        <span className="inline-block border border-yellow-400/40 bg-yellow-300/10 px-3 py-1 text-sm text-yellow-400 rounded-sm mb-6">
          Depoimentos
        </span>
        <h2 className="text-5xl font-light">
          Nosso foco sempre será seu{" "}
          <span className="text-yellow-400 font-medium">resultado.</span>
        </h2>
      </div>

      {/* Carrossel */}
      <div
        ref={carouselRef}
        className="flex px-10 overflow-hidden select-none whitespace-nowrap"
      >
        {duplicated.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[440px] h-[280px] border border-white/10 backdrop-blur-sm px-8 py-8 whitespace-normal overflow-hidden"
          >
            <p className="text-gray-300 text-[15px] leading-relaxed mb-8 line-clamp-6">
              {item.quote}
            </p>

            <div className="flex items-start">
              <span className="text-4xl text-yellow-400 mr-3 leading-none">
                “
              </span>
              <div>
                <p className="font-semibold text-white text-lg">{item.name}</p>
                <p className="text-sm text-gray-400">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
