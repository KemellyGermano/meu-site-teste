import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import ClientsCarousel from "./components/ClientsCarousel";
import MobileClientsCarousel from "./components/MobileClientsCarousel";
import ServicesSection from "./components/ServicesSection";
import SolutionsSection from "./components/SolutionsSection";
import StatsSection from "./components/StatsSection";
import ProcessSection from "./components/ProcessSection";
import ProjectsSection from "./components/ProjectsSection";
import Testimonials from "./components/Testimonials";
import FaqSection from "./components/FaqSection";
import CaseDeSucessoFinal from "./components/CaseDeSucessoFinal";
import Problems from "./components/Problems";
import LeadershipSection from "./components/LeadershipSection";

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* === LISTRAS DIAGONAIS NAS LATERAIS (visíveis inclusive na Navbar) === */}
      <div
        className="absolute top-0 left-0 h-full w-[20px] sm:w-[40px] md:w-[60px] lg:w-[100px] xl:w-[120px] 
        bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0.06)_2px,transparent_2px,transparent_8px)] 
        pointer-events-none z-0"
      />

      <div
        className="absolute top-0 right-0 h-full w-[20px] sm:w-[40px] md:w-[60px] lg:w-[100px] xl:w-[120px] 
        bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0.06)_2px,transparent_2px,transparent_8px)] 
        pointer-events-none z-0"
      />

      {/* === LINHAS VERTICAIS DELIMITANDO O CONTEÚDO === */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 bottom-0 left-[20px] sm:left-[40px] md:left-[60px] lg:left-[100px] xl:left-[120px] w-px bg-white/10" />
        <div className="absolute top-0 bottom-0 right-[20px] sm:right-[40px] md:right-[60px] lg:right-[100px] xl:right-[120px] w-px bg-white/10" />
      </div>

      {/* === CONTEÚDO PRINCIPAL === */}
      <div className="relative z-10 w-full">
        {/* Navbar (com fundo transparente para mostrar o padrão atrás) */}
        <div className="relative z-20">
          <Navbar />
        </div>

        {/* Hero (respeita margens laterais) */}
        <div className="px-[30px] sm:px-[60px] md:px-[80px] lg:px-[110px] xl:px-[130px] 2xl:px-[160px] bg-black">
          <Hero />
        </div>

        {/* Carrosséis full-width */}
        <div className="w-full">
          <Carousel />
          <MobileClientsCarousel />
          <ClientsCarousel />
        </div>

        {/* Seções com padding lateral */}
        <div className="px-[30px] sm:px-[60px] md:px-[80px] lg:px-[110px] xl:px-[130px] 2xl:px-[160px]">
          <Problems />
          <SolutionsSection />
          <StatsSection />
          <ProcessSection />
          <ProjectsSection />
        </div>

        {/* Testimonials full-width */}
        <div className="w-full">
          <Testimonials />
        </div>

        {/* Restante das seções */}
        <div className="px-[30px] sm:px-[60px] md:px-[80px] lg:px-[110px] xl:px-[130px] 2xl:px-[160px]">
          <ServicesSection />
          <FaqSection />
          <LeadershipSection />
          <CaseDeSucessoFinal />
        </div>
      </div>
    </div>
  );
}
