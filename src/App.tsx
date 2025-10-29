import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import ClientsCarousel from "./components/ClientsCarousel";
import MobileClientsCarousel from "./components/MobileClientsCarousel";
import ProblemsSection from "./components/ProblemsSection";
import SolutionsSection from "./components/SolutionsSection";
import TestimonialSection from "./components/TestimonialSection";
import StatsSection from "./components/StatsSection";
import ProcessSection from "./components/ProcessSection";
import ProjectsSection from "./components/ProjectsSection";
import Testimonials from "./components/Testimonials";
import FaqSection from "./components/FaqSection";
import CaseDeSucessoFinal from "./components/CaseDeSucessoFinal";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar />
      <Hero />
      <Carousel />
      {/* Clientes */}
      <MobileClientsCarousel /> {/* mobile */}
      <ClientsCarousel /> {/* desktop/tablet */}
      <ProblemsSection />
      <SolutionsSection />
      <TestimonialSection />
      <StatsSection />
      <ProcessSection />
      <ProjectsSection />
      <Testimonials />
      <FaqSection />
      <CaseDeSucessoFinal />
    </div>
  );
}
