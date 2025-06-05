import {
  ContactForm,
  FirstSection,
  FlooringSections,
  Navbar,
  QuienesSomos,
  OpinionesCarousel,
  Footer,
  ProjectSection,
} from "./components";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { LanguageProvider } from "./context/LanguageProvider";
import "./fullpage.css";
import { EmbeddedReview } from "./components/opinionesSection/types";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);
  const reseñasEmbed: EmbeddedReview[] = [
    
  ];
  return (
    <>
      <LanguageProvider>
        <div className="fullpage">
          <Navbar />
          <FirstSection />
        </div>
        <div data-aos="fade-up">
          <QuienesSomos />
        </div>
        <div data-aos="fade-up" data-aos-once="true">
          <FlooringSections />
        </div>
        <div data-aos="fade-right" data-aos-once="true">
          <ProjectSection />
        </div>
        <OpinionesCarousel reviews={reseñasEmbed} itemsPerSlide={3} />
        <ContactForm />
        <Footer />
      </LanguageProvider>
    </>
  );
}

export default App;
