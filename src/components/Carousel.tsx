import React, { useRef, useEffect } from "react";

import projeto1 from "../images/Gaming.png";
import projeto2 from "../images/ListofGraphic.png";
import projeto3 from "../images/uixNinja1.png";

interface CarouselItem {
  image: string;
}

const items: CarouselItem[] = [
  { image: projeto1 },
  { image: projeto2 },
  { image: projeto3 },
];

// duplicamos para loop infinito
const duplicatedItems = [...items, ...items];

const Carousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // ajusta a velocidade com base no tamanho da tela
    const screenWidth = window.innerWidth;
    let scrollStep = 0.6;

    if (screenWidth <= 768) {
      scrollStep = 1.2; // acelera no mobile
    } else if (screenWidth <= 1024) {
      scrollStep = 0.9; // tablets e notebooks
    }

    let scrollAmount = 0;
    let animationFrame: number;

    const scroll = () => {
      scrollAmount += scrollStep;

      if (scrollAmount >= carousel.scrollWidth / 2) {
        scrollAmount = 0;
        carousel.scrollLeft = 0;
      } else {
        carousel.scrollLeft = scrollAmount;
      }

      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="relative w-full overflow-hidden py-5 border-b border-white/10">
      <div
        ref={carouselRef}
        className="flex gap-12 select-none whitespace-nowrap will-change-transform overflow-hidden no-scrollbar"
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
