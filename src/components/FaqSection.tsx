import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "Preciso ter um briefing pronto para começar?",
    answer:
      "Não necessariamente. Nós ajudamos você a organizar todas as ideias e informações necessárias para o início do projeto.",
  },
  {
    question: "Vocês fazem apenas design ou também desenvolvem?",
    answer:
      "Fazemos ambos. Trabalhamos com design e também com o desenvolvimento completo, garantindo consistência entre visual e funcionalidade.",
  },
  {
    question: "Posso contratar só a parte de branding ou design?",
    answer:
      "Sim, é possível contratar apenas o serviço que você precisa. Podemos atuar somente no design visual, identidade de marca ou desenvolvimento completo.",
  },
  {
    question: "Como funciona a consultoria gratuita?",
    answer:
      "A consultoria gratuita é um bate-papo inicial para entender melhor o seu projeto e oferecer as melhores soluções antes do início do trabalho.",
  },
];

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="text-white border-t border-white/10 py-14 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-16">
          <div>
            <span className="inline-block border border-orange-600/40 bg-black px-3 py-1 text-xs text-[#FF6633] rounded-sm mb-6">
              FAQ
            </span>
            <h2 className="text-5xl font-light">Perguntas frequentes</h2>
          </div>

          <p className="text-gray-400 text-base mt-10 md:mt-12 md:px-5 md:w-[40%] leading-relaxed">
            Possui alguma dúvida que não está aqui? Entre em contato conosco
            pelo email{" "}
            <a
              href="mailto:marcos@fronthor.com"
              className="text-[#FF6633] hover:underline"
            >
              kenero@kejota.com
            </a>
          </p>
        </div>

        {/* FAQ Items */}
        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="py-6 cursor-pointer select-none"
              onClick={() => toggleItem(index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">{item.question}</h3>
                <div className="text-[#] transition-transform duration-300">
                  {openIndex === index ? (
                    <Minus size={20} />
                  ) : (
                    <Plus size={20} />
                  )}
                </div>
              </div>

              {/* Resposta */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-40 mt-3" : "max-h-0"
                }`}
              >
                <p className="text-gray-400 text-[15px] leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
