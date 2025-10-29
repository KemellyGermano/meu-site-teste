import React, { useRef, useEffect } from "react";

import projeto1 from "../images/site1.jpg";
import projeto2 from "../images/site2.jpg";
import projeto3 from "../images/site3.jpg";
import projeto4 from "../images/site4.jpg";
import projeto5 from "../images/site5.jpg";

interface CarouselItem {
  image: string;
}

const items: CarouselItem[] = [
  { image: projeto1 },
  { image: projeto2 },
  { image: projeto3 },
  { image: projeto4 },
  { image: projeto5 },
];

// duplicamos os itens para loop infinito
const duplicatedItems = [...items, ...items];

const Carousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollAmount = 0;
    const scrollStep = 0.6; // ajuste a velocidade
    let animationFrame: number;

    const scroll = () => {
      if (!carousel) return;

      scrollAmount += scrollStep;

      // reinicia o loop quando atingir metade do conteúdo
      if (scrollAmount >= carousel.scrollWidth / 2) {
        scrollAmount = 0;
      }

      // importante: forçar scrollLeft diretamente
      carousel.scrollLeft = scrollAmount;

      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="relative w-full overflow-hidden py-5 border-b border-white/10">
      <div
        ref={carouselRef}
        className="flex gap-12 select-none whitespace-nowrap"
        style={{ overflowX: "hidden" }} // impede scrollbar, mas permite scrollLeft
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[436px] h-[317px] rounded-2xl overflow-hidden"
          >
            <img
              src={item.image}
              alt={`Projeto ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
