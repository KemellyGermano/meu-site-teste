import { Check } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Imersão estratégica",
    description:
      "Antes de qualquer linha de código, mergulhamos no seu projeto. Mapeamos gargalos, ineficiências e buscamos oportunidades que passam despercebidas.",
    bullets: [
      "Diagnóstico baseado em dados reais",
      "Alinhamento com metas de negócio",
      "Detecção de gargalos e ineficiências",
      "Levantamento de oportunidades ocultas",
    ],
  },
  {
    number: "02",
    title: "Arquitetura pensada para escalar",
    description:
      "Construímos a base do seu produto desde a base com foco em escalabilidade, clareza e performance.",
    bullets: [
      "Navegação simples e fluida",
      "Estrutura modular e escalável",
      "Foco em usabilidade e conversão",
      "Base pronta para crescer com você",
    ],
  },
  {
    number: "03",
    title: "Nascendo pronto para escalar",
    description:
      "O que entregamos já nasce pronto para escalar. Bonito, funcional e preparado para crescer com segurança. Nada aqui quebra no primeiro pico de acesso.",
    bullets: [
      "Código otimizado e confiável",
      "Integrações funcionando desde o dia 1",
      "Desempenho testado para alto tráfego",
      "Pronto para iterar, crescer e evoluir",
    ],
  },
];

export default function ProcessSection() {
  return (
    <section className="w-full relative mt-10">
      {/* Linha superior atravessando toda a tela */}
      <div className="absolute top-0 left-0 w-full border-t border-white/10" />

      {/* Cabeçalho */}
      <div className="max-w-6xl mx-auto text-start md:text-left mb-16 pt-16">
        <div className="inline-block border border-orange-600/40 bg-black px-3 py-1 text-xs text-[#FF6633] rounded-sm mb-6">
          Nosso processo
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="text-4xl md:text-5xl font-normal leading-tight">
            Sem fluxos complexos. <br /> Nosso foco é seu resultado.
          </h2>

          <p className="text-gray-400 max-w-md">
            Do briefing à entrega, cada etapa foi desenhada para simplificar,
            agilizar e gerar impacto real.
          </p>
        </div>
      </div>

      {/* Etapas */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 border-t border-white/10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="border border-white/10 p-10 flex flex-col gap-4"
          >
            {/* Número */}
            <div className="bg-gradient-to-b from-[#FF6633] to-transparent text-[#ffffff] w-10 h-10 flex items-center justify-center rounded-md font-medium text-sm shadow-[0_0_10px_rgba(255,153,0,0.4)]">
              {step.number}
            </div>

            {/* Conteúdo */}
            <h3 className="text-lg font-semibold text-white">{step.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-3">
              {step.description}
            </p>

            <ul className="flex flex-col gap-2 text-sm text-gray-300">
              {step.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#FF6633] mt-0.5" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
