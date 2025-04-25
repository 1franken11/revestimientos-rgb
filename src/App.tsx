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
    {
      id: 1,
      iframeSrc:
        "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fgumaporoger%2Fposts%2Fpfbid0CnsTnUqbiEddxwSA571vbmqV4ZcnjAwx4ZYcfDZreXhbjGBuSgtSsZFTP2rMXfB5l&show_text=true",
    },
    {
      id: 2,
      iframeSrc:
        "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Farbell.riocolorado.35%2Fposts%2Fpfbid02E67hwNEMc5stmdW3fTPT6AUFmKCKewStyPvHDsa6VNkW9ZPTswP5DiZZZwpDk5Bel&show_text=true",
    },
    {
      id: 3,
      iframeSrc:
        "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fgumaporoger%2Fposts%2Fpfbid0CnsTnUqbiEddxwSA571vbmqV4ZcnjAwx4ZYcfDZreXhbjGBuSgtSsZFTP2rMXfB5l&show_text=true",
    },
    {
      id: 4,
      iframeSrc:
        "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Farbell.riocolorado.35%2Fposts%2Fpfbid02E67hwNEMc5stmdW3fTPT6AUFmKCKewStyPvHDsa6VNkW9ZPTswP5DiZZZwpDk5Bel&show_text=true",
    },
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
