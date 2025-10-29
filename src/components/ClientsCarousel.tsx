import React, { useEffect, useState } from "react";

// importa suas logos
import logo1 from "../images/logoteste-removebg-preview.png";
import logo2 from "../images/logoteste-removebg-preview.png";
import logo3 from "../images/logoteste-removebg-preview.png";
import logo4 from "../images/logoteste-removebg-preview.png";
import logo5 from "../images/logoteste-removebg-preview.png";
import logo6 from "../images/logoteste-removebg-preview.png";
import logo7 from "../images/logoteste-removebg-preview.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

interface SingleColumnProps {
  offset?: number;
  delay?: number;
}

const SingleColumn: React.FC<SingleColumnProps> = ({
  offset = 0,
  delay = 0,
}) => {
  const [index, setIndex] = useState(offset % logos.length);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % logos.length);
      }, 3000);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  return (
    <div className="relative w-[360px] lg:w-[260px] h-[75px] overflow-hidden border border-white/10 bg-transparent flex justify-center items-center">
      <div
        key={index}
        className="absolute animate-fadeSlide w-full flex justify-center items-center"
      >
        <img
          src={logos[index]}
          alt={`Logo ${index}`}
          className="w-[114px] h-[60px] object-contain"
        />
      </div>

      <style>{`
        @keyframes fadeSlide {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          15% {
            opacity: 1;
            transform: translateY(0);
          }
          85% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-40px);
          }
        }
        .animate-fadeSlide {
          animation: fadeSlide 3s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

const ClientsCarousel: React.FC = () => {
  return (
    <section className="w-full py-20 flex-col items-center overflow-hidden border-b border-white/10 hidden lg:flex">
      <h3 className="text-gray-300 mb-5 text-lg text-center">
        Mais de 40 empresas já confiam na{" "}
        <span className="font-semibold text-white">Fronthor</span>
      </h3>

      <div className="flex justify-center items-center">
        <SingleColumn offset={0} />
        <SingleColumn offset={2} />
        <SingleColumn offset={4} />
      </div>
    </section>
  );
};

export default ClientsCarousel;
