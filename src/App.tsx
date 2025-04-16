import {
  ContactForm,
  FirstSection,
  FlooringSections,
  Navbar,
  QuienesSomos,
  Footer,
  ProjectSection
} from "./components"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { LanguageProvider } from "./context/LanguageProvider"
import "./fullpage.css"
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true
    });
  }, []);
  return (
    <>
      <LanguageProvider>
        <div className="fullpage">
          <Navbar />
          <FirstSection />
        </div>
        {/*<Fondo></Fondo>*/}
        <div data-aos="fade-up"><QuienesSomos /></div>
        <div data-aos="fade-up"><FlooringSections /></div>
        <div data-aos="fade-right"><ProjectSection /></div>
        {/*<OpinionesCarousel
          reviews={reseñasEmbed}
          itemsPerSlide={3}
        />*/}

        <ContactForm />
        <Footer />
      </LanguageProvider>
    </>
  )
}

export default App
