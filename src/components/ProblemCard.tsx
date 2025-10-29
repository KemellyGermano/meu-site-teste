import React from "react";

type Props = {
  image: string;
  title: string;
  alt?: string;
};

const ProblemCard: React.FC<Props> = ({ image, title, alt = "problem" }) => {
  return (
    <article className="relative rounded-2xl overflow-hidden border border-white/6 bg-[#0b0b0b]">
      {/* Imagem */}
      <div className="w-full h-[320px] md:h-[360px] lg:h-[420px] relative">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover"
          draggable={false}
        />

        {/* soft dark overlay to match background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60 pointer-events-none" />

        {/* golden vignette (diffuse) */}
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 -right-20 w-72 h-72 rounded-full opacity-60 blur-3xl bg-[radial-gradient(ellipse_at_center,_#f6d28a_0%,_rgba(246,210,138,0.0)_35%)]"
        />

        {/* left subtle gold strip (like on image) */}
        <div className="absolute left-6 top-10 w-40 h-10 rounded-md bg-gradient-to-r from-yellow-300/95 to-yellow-400/80 opacity-90 rotate-[-8deg] transform shadow-xl" />
      </div>

      {/* caption area */}
      <div className="px-6 py-8 text-center">
        <h4 className="text-white text-lg md:text-xl font-semibold leading-tight">
          {title}
        </h4>
      </div>
    </article>
  );
};

export default ProblemCard;
